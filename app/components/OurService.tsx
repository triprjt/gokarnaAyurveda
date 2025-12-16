import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Panchakarma Therapy",
    description: "Complete detoxification and rejuvenation through traditional Ayurvedic treatments",
    image: "/panchakarma.jpeg",
  },
  {
    id: 2,
    title: "Abhyanga Massage",
    description: "Therapeutic full-body massage with warm herbal oils for deep relaxation",
    image: "/abhyanga.jpg",
  },
  {
    id: 3,
    title: "Shirodhara",
    description: "Continuous flow of warm oil on the forehead to calm the mind and nervous system",
    image: "/shirodhara.jpg",
  },
  {
    id: 4,
    title: "Yoga & Meditation",
    description: "Daily sessions in serene natural settings to harmonize body and mind",
    image: "/yogaandmeditation.jpeg",
  },
  {
    id: 5,
    title: "Herbal Treatments",
    description: "Customized treatments using authentic Ayurvedic herbs and formulations",
    image: "/herbaltreatment.jpg",
  },
  {
    id: 6,
    title: "Ayurvedic Cuisine",
    description: "Nutritious, healing meals prepared according to Ayurvedic principles",
    image: "/ayurvedicuisine.jpeg",
  },
];

export default function OurService() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the ancient wisdom of Ayurveda through our comprehensive range of healing therapies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-emerald-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

