import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Premium Residential Complex',
    description: 'Luxury residential towers with world-class amenities and modern architecture',
    image: '/assets/project-blueprint.jpg',
    location: 'Tirupati',
    tag: 'Residential'
  },
  {
    id: 2,
    title: 'Premium Office Development',
    description: 'State-of-the-art office complex with glass facades and contemporary design',
    image: '/assets/project-office.jpg',
    location: 'Bangalore',
    tag: 'Commercial'
  },
  {
    id: 3,
    title: 'Luxury Interior Design',
    description: 'Contemporary interiors with premium finishes and world-class amenities',
    image: '/assets/project-livingroom.jpg',
    location: 'Tirupati & Bangalore',
    tag: 'Interior Design'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-3">Projects & Gallery</h2>
          <p className="text-gray-600 text-lg">Showcasing our premium construction and design expertise</p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card-premium bg-white rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-56">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent px-4 py-2 text-white text-sm font-semibold">
                  {project.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm font-semibold text-accent">📍 {project.location}</span>
                  <button className="text-primary hover:text-accent font-semibold text-sm transition-colors">View More →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
