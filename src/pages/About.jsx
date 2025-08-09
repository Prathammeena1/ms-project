import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              We are a passionate team dedicated to creating amazing web experiences. 
              Our mission is to provide high-quality solutions that make a difference.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">What We Do</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Web Development</li>
              <li>• User Experience Design</li>
              <li>• Digital Solutions</li>
              <li>• Technology Consulting</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <p className="text-gray-600">
              Innovation, quality, and customer satisfaction are at the core of everything we do. 
              We believe in continuous learning and adapting to the ever-changing digital landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
