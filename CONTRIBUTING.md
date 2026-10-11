# Contribuyendo

## Flujo de trabajo

1. Crear una rama desde `main` con el patrón **`feature/<nombre>`** (ej. `feature/contact-form-validation`).
2. Commitear usando **[Conventional Commits](https://www.conventionalcommits.org/)**: `feat: ...`, `fix: ...`, `docs: ...`,
   `refactor: ...`, `chore: ...`, con `BREAKING CHANGE:` en el cuerpo del commit cuando rompa compatibilidad. El tipo de
   commit es lo que decide automáticamente la siguiente versión (ver más abajo), así que es obligatorio, no solo estilo.
   Esto se valida automáticamente: un hook de Husky (`commit-msg`, vía [commitlint](https://commitlint.js.org/)) rechaza
   localmente cualquier commit que no siga el formato, antes de que llegue a existir en el repo.
3. Abrir un Pull Request hacia `main`. La descripción se precarga con
   [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md) — completarla.
4. El PR dispara automáticamente 4 checks obligatorios ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)):
   `branch-name` (verifica que la rama de origen siga el patrón `feature/***`), `build`, `lint`, `test`. El botón de merge
   permanece bloqueado hasta que los 4 pasen.
5. Al mergear a `main`, el workflow [`.github/workflows/release.yml`](.github/workflows/release.yml) ejecuta
   [`semantic-release`](https://semantic-release.gitbook.io/), que automáticamente:
   - analiza los mensajes de commit mergeados para decidir si el release es `patch`/`minor`/`major` (SemVer),
   - actualiza la versión en `package.json`,
   - genera/actualiza `CHANGELOG.md`,
   - crea y publica el tag de git correspondiente,
   - publica un GitHub Release con las notas generadas.

   Si un PR no trae ningún commit `feat:`/`fix:`/`BREAKING CHANGE:` (por ejemplo, solo `docs:`/`chore:`), no se genera ningún
   release — esto es el comportamiento esperado de semantic-release, no un error.

`main` está protegida: no se permite push directo (ni a administradores), solo vía Pull Request, y solo puede mergearse
con los 4 checks en verde, uno de los cuales (`branch-name`) rechaza PRs que no vengan de una rama `feature/***`. Esto ya
está aplicado en GitHub (Settings → Branches), no es solo una propuesta — ver abajo cómo se configuró, por si hay que
reproducirlo en otro repo o ajustarlo.

## Configuración de protección de rama (`main`)

Aplicada vía `gh api` (branch protection clásica, no un *ruleset*):

```bash
gh api -X PUT repos/santiagoa150/Portfolio/branches/main/protection \
  -H "Accept: application/vnd.github+json" \
  --input - <<'EOF'
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["build", "lint", "test", "branch-name"]
  },
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "required_approving_review_count": 0
  },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false
}
EOF
```

- `enforce_admins: false` es necesario para que el workflow de release pueda empujar el commit de
  `CHANGELOG.md`/`package.json` y el tag a `main` sin que la protección de rama lo bloquee (ver nota abajo).
- **El patrón `feature/***` para la rama de origen del PR no se aplica vía GitHub Rulesets**: se intentó un ruleset con la
  regla nativa `branch_name_pattern` (restringiendo el nombre de toda rama que no sea `main` a `^feature/.+`), pero la API
  lo rechaza (`422 Invalid rule 'branch_name_pattern'`) en este repo/plan — esa regla de ruleset no está disponible aquí.
  En su lugar, se aplica como el cuarto check obligatorio (`branch-name` en `ci.yml`), que falla el PR si
  `github.head_ref` no empieza con `feature/`. Es menos "duro" que un ruleset (técnicamente no impide *crear* una rama con
  otro nombre, solo bloquea el merge del PR), pero cumple el criterio de aceptación igual y es más visible para quien abre
  el PR (aparece como check fallido con mensaje explícito, no como un error genérico de GitHub).

### Nota sobre el push automático de `semantic-release` a una rama protegida

`semantic-release` (vía el plugin `@semantic-release/git`) necesita poder empujar un commit a `main` después del merge, lo
cual normalmente choca con "ningún push directo, ni de administradores". Dos opciones:

- **Usar el `GITHUB_TOKEN` por defecto** (ya configurado en `release.yml`) con `enforce_admins: false` — funciona si la
  cuenta que corre el workflow (el bot `github-actions`) está exenta de la regla de "Require a pull request before
  merging", lo cual GitHub permite por defecto para el `GITHUB_TOKEN` en la mayoría de configuraciones de branch
  protection clásica.
- Si tu configuración de protección bloquea también al bot (ocurre con *rulesets* nuevos sin una lista de bypass), generar
  un **Personal Access Token** de una cuenta con permiso de bypass y guardarlo como secret `SEMANTIC_RELEASE_TOKEN` del
  repositorio — `release.yml` ya lo usa automáticamente si existe (`secrets.SEMANTIC_RELEASE_TOKEN || secrets.GITHUB_TOKEN`).

## Tests

El runner de tests unitarios (Vitest, vía `@angular/build:unit-test`) ya está configurado y corre en CI (`yarn test`).
Escribir la suite de tests está fuera del alcance de esta configuración inicial — `tests/app/app.spec.ts` existe solo
como smoke test mínimo para que el comando tenga al menos un test que ejecutar (sin esto, `ng test` falla con "no se
encontraron tests" en vez de pasar vacío).

Los specs viven en `tests/`, en la raíz del repo, no junto al código en `src/` — la estructura dentro de `tests/` espeja
`src/` (ej. `tests/app/app.spec.ts` para `src/app/app.ts`) para que sea fácil ubicar el test de un archivo dado. Esto
requiere dos ajustes fuera de la convención por defecto de Angular CLI, ya aplicados:

- `tsconfig.spec.json`: `include` apunta a `tests/**/*.spec.ts` en vez de `src/**/*.spec.ts`.
- `angular.json` → `architect.test.options.include`: `["../tests/**/*.spec.ts"]` (el runner de tests resuelve sus
  patrones de inclusión relativos al `sourceRoot` del proyecto, `src/`, no a la raíz del repo — de ahí el `../`).

Al agregar un nuevo spec, replicar la ruta del archivo que testea dentro de `tests/` (ej. un test para
`src/app/shared/ui/button/button.ts` va en `tests/app/shared/ui/button/button.spec.ts`), e importar el código bajo
prueba con una ruta relativa hacia `src/`.
