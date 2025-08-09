import React from 'react'

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      icon: "🌐"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface designs",
      icon: "🎨"
    },
    {
      title: "Consulting",
      description: "Technology consulting and digital transformation",
      icon: "💡"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a comprehensive range of digital services to help your business grow and succeed in the modern world.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-200">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss your project and see how we can help bring your ideas to life.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
