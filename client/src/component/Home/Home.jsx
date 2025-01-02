import React from 'react'
import HomePage from './HomePage'
import H1 from './H1'

export default function Home() {
  const headings = [
    "Welcome to RegiSphere - Highlights a global and inclusive registration system.",
    "This project enables the creation, updating, and deletion of course types and courses.",
    "Providing a flexible platform to manage academic offerings.",
    "Administrators can view and manage all registrations efficiently.",
    "Students can easily register for available course offerings.",
    "The system includes a responsive design with intuitive UI components, ensuring smooth navigation.",
    "The project integrates Git for version control, includes a hosted deployment on Netilify."
  ];
  return (
    <div>
        <HomePage headings={headings}  />
        <H1 />
    </div>
  )
}
