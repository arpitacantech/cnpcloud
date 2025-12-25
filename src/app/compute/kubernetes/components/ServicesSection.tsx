import { ServiceCard } from "./ServiceCard";
import { StickyImage } from "./StickyImage";
// import { SectionHeader } from "./SectionHeader";

const services = [
  {
    title: "High-Performance NVMe Block Storage",
    description:
      "Get low-latency, high-IOPS block storage powered by NVMe. It’s well-suited for databases, analytics workloads, and virtual machines that depend on fast, consistent performance.",
  },
  {
    title: "S3-Compatible Object Storage",
    description:
      "Store unstructured data at scale with S3-compatible object storage. It works seamlessly with your existing tools and keeps storage costs predictable as you grow.",
  },
  {
    title: "Automated Backup & Snapshot Solutions",
    description:
      "Cantech Cloud lets you automate backups and snapshots with custom policies and retention of up to 7 years, covering your VMs, volumes and applications without manual effort.",
  },
  {
    title: "Multi-Region Disaster Recovery",
    description:
      "Cantech Cloud replicates your data across regions and supports failover with RTOs as low as 15 minutes and RPOs down to 30 minutes, helping you stay online even during unexpected outages.",
  },
  {
    title: "Diverse Block Storage Tiers for Every Use Case",
    description:
      "Cantech Cloud offers block storage options for every workload. From NVMe for general use, high IOPS or cost efficiency, to SAS and Magnetic tiers for large-scale and archival needs.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="relative py-10 md:py-12 lg:py-14 ambient-glow">

      <div className="md:px-8 text-center">

            <h2 className="cc-h2">
                Why Choose CloudPe Kubernetes-as-a-Service?
            </h2>
            <p className="subtitle">
                Lorem ipsum dolor sit amet, adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
            </p>
        </div>

      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
         

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Service Cards */}
          <div className="w-full lg:w-8/12">
            <div className="space-y-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Sticky Image */}
          <div className="hidden lg:block lg:w-4/12">
            <div className="sticky top-24 border border-solid border-[#ffffff29] rounded-xl">
              <StickyImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
