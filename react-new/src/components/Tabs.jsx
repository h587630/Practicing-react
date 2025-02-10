import { useState } from 'react'; // Import useState hook
import TabButton from '../TabButton';
import { EXAMPLES } from '../data.js';

export default function Tabs() {
  // Define state to track the selected topic
  const [selectTopic, setSelectTopic] = useState(null);

  // Define the function to handle topic selection
  const handleSelect = (topic) => {
    setSelectTopic(topic); 
  };

  return (
    <>
      <h2 className="text">Examples</h2>
      <menu className="tab-button">
        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
      </menu>

      {!selectTopic && (
        <p className="components">Please select a topic.</p>
      )}

      {selectTopic && (
        <div id="tab-content" className="components">
          <h3>{EXAMPLES[selectTopic].title}</h3>
          <p>{EXAMPLES[selectTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectTopic].code}</code>
          </pre>
        </div>
      )}
    </>
  );
}
