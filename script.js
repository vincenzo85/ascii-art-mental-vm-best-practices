document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('terminal');
  
  const asciiArt = `
  +----------------------------+
  |          INTRODUCTION      |
  +----------------------------+
           |
           |  SELECTING RIGHT ZONE & REGION
           |  (Cost, Regulations, Availability Needs, Latency, Specific Hardware Needs)
           v
  +---------------------------------------+
  |       AVAILABILITY & DISTRIBUTION     |
  |  Distribute VMs across multiple zones | 
  |   and regions for high availability   |
  +---------------------------------------+
           |
           |  CHOOSING RIGHT MACHINE TYPE
           |  (Compute-Intensive Workloads, Memory-Intensive Workloads, Graphics-Intensive Workloads)
           v
  +--------------------------------------------------+
  |       COST MANAGEMENT STRATEGIES                 |
  |  Committed Use Discounts, Preemptible Instances  | 
  |           for cost-effective operations          |
  +--------------------------------------------------+
           |
           |  USING LABELS
           |  (Environment, Team, Business Unit) for organization and management
           v
  +------------------------------------------------------------------------+
  |                              CONCLUSION                                |
  |  Summary of best practices for VMs: Selecting the right zone & region, | 
  |  choosing appropriate machine types, managing costs, and using labels  | 
                                    effectively
  +-----------------------------------------------------------------------+

  `;


  function typeWriterEffect(text, delay = 10) {
    terminal.textContent = '';
    let index = 0;

    function writeChar() {
      if (index < text.length) {
        terminal.textContent += text[index++];
        setTimeout(writeChar, delay);
      }
    }

    writeChar();
  }

  // Set the typing speed delay to 10ms for a very fast typing effect
  typeWriterEffect(asciiArt, 10);
});


