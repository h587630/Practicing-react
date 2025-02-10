/* eslint-disable react/prop-types */
import { CORE_CONCEPTS } from '../data.js';



// Define the CoreConcept component
function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

export default function CoreConcepts() {
  return (
    <div className='core'>
      <section className='core-concepts'>
        {CORE_CONCEPTS.length > 0 ? (
          CORE_CONCEPTS.map((concept, index) => (
            <CoreConcept
              key={index}
              title={concept.title}
              description={concept.description}
              image={concept.image}
            />
          ))
        ) : (
          <p>No core concepts available.</p>
        )}
      </section>
    </div>
  );
}
