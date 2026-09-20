import { Component, signal } from '@angular/core';

interface ServiceEntry {
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.page.html',
})
export class Services {
  protected readonly services: ServiceEntry[] = [
    {
      title: $localize`:@@services.list.backend.title:Backend Development`,
      description: $localize`:@@services.list.backend.description:Design and implementation of RESTful APIs and backend systems, built to be reliable, well documented and easy to maintain.`,
    },
    {
      title: $localize`:@@services.list.microservices.title:Microservices Architecture`,
      description: $localize`:@@services.list.microservices.description:Breaking monolithic systems down into decoupled, independently deployable microservices that scale with the product.`,
    },
    {
      title: $localize`:@@services.list.events.title:Event-Driven Systems`,
      description: $localize`:@@services.list.events.description:Asynchronous messaging and event-driven architectures that keep distributed systems responsive under load.`,
    },
    {
      title: $localize`:@@services.list.database.title:Database Design`,
      description: $localize`:@@services.list.database.description:Modeling and optimization of relational and non-relational databases for performance and data integrity.`,
    },
    {
      title: $localize`:@@services.list.observability.title:Observability & Monitoring`,
      description: $localize`:@@services.list.observability.description:Instrumenting systems with tools like Datadog and Grafana for full visibility into production behavior.`,
    },
    {
      title: $localize`:@@services.list.mentoring.title:Code Review & Mentoring`,
      description: $localize`:@@services.list.mentoring.description:Reviewing code and mentoring teams with a focus on scalability, maintainability and good engineering practices.`,
    },
  ];

  protected readonly openIndex = signal<number | null>(0);

  protected isOpen(index: number): boolean {
    return this.openIndex() === index;
  }

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }

  protected titleClass(index: number): string {
    return this.isOpen(index)
      ? 'bg-linear-to-r from-brand-purple via-brand-coral to-brand-orange bg-clip-text text-transparent'
      : 'text-ink';
  }
}
