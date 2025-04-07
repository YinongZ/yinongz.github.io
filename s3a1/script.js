// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize selections
    let selectedSubjects = [];
    let selectedActions = [];
    let selectedObjects = [];
    
    // Event listeners for subject buttons
    const subjectButtons = document.querySelectorAll('.subject-btn');
    subjectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleSelection(btn, 'subject');
            checkGenerateButton();
        });
    });
    
    // Event listeners for action buttons
    const actionButtons = document.querySelectorAll('.action-btn');
    actionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleSelection(btn, 'action');
            checkGenerateButton();
        });
    });
    
    // Event listeners for object buttons
    const objectButtons = document.querySelectorAll('.object-btn');
    objectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleSelection(btn, 'object');
            checkGenerateButton();
        });
    });
    
    // View source code button event
    const viewSourceBtn = document.getElementById('view-source-btn');
    if (viewSourceBtn) {
        viewSourceBtn.addEventListener('click', () => {
            const sourceCodeElement = document.getElementById('full-source-code');
            sourceCodeElement.classList.toggle('hidden');
            
            if (sourceCodeElement.classList.contains('hidden')) {
                viewSourceBtn.textContent = 'View Full Source';
            } else {
                viewSourceBtn.textContent = 'Hide Source';
            }
        });
    }
    
    // Generate button event
    const generateBtn = document.getElementById('generate-btn');
    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            generatePoem();
        });
    }
    
    // Reset button event
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            // Clear selections
            selectedSubjects = [];
            selectedActions = [];
            selectedObjects = [];
            
            // Remove selected class from all buttons
            document.querySelectorAll('.subject-btn, .action-btn, .object-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Disable generate button
            document.getElementById('generate-btn').disabled = true;
            
            // Reset poem display
            const poemDisplay = document.getElementById('poem-display');
            if (poemDisplay) {
                poemDisplay.textContent = 'Select elements and click generate to create your surrealist composition...';
            }
        });
    }
    
    // Toggle selection of buttons
    function toggleSelection(button, type) {
        if (button.classList.contains('selected')) {
            button.classList.remove('selected');
            
            // Remove from appropriate array
            if (type === 'subject') {
                selectedSubjects = selectedSubjects.filter(item => item !== button.textContent);
            } else if (type === 'action') {
                selectedActions = selectedActions.filter(item => item !== button.textContent);
            } else if (type === 'object') {
                selectedObjects = selectedObjects.filter(item => item !== button.textContent);
            }
        } else {
            button.classList.add('selected');
            
            // Add to appropriate array
            if (type === 'subject') {
                selectedSubjects.push(button.textContent);
            } else if (type === 'action') {
                selectedActions.push(button.textContent);
            } else if (type === 'object') {
                selectedObjects.push(button.textContent);
            }
        }
    }
    
    // Check if generate button should be enabled
    function checkGenerateButton() {
        const generateBtn = document.getElementById('generate-btn');
        if (generateBtn) {
            if (selectedSubjects.length >= 1 && selectedActions.length >= 1 && selectedObjects.length >= 1) {
                generateBtn.disabled = false;
            } else {
                generateBtn.disabled = true;
            }
        }
    }
    
    // Poem generation function
    function generatePoem() {
        // Verify we have selections
        if (selectedSubjects.length === 0 || selectedActions.length === 0 || selectedObjects.length === 0) {
            alert("Please select at least one item from each category");
            return;
        }
        
        // Get random elements from each category
        const randomSubject = selectedSubjects[Math.floor(Math.random() * selectedSubjects.length)];
        const randomAction = selectedActions[Math.floor(Math.random() * selectedActions.length)];
        const randomObject = selectedObjects[Math.floor(Math.random() * selectedObjects.length)];
        
        // Apply transformations based on chance
        let transformedSubject = randomSubject;
        let transformedObject = randomObject;
        
        // Random chance to apply transformations
        if (Math.random() > 0.7) {
            transformedSubject = transformSubject(transformedSubject);
        }
        
        if (Math.random() > 0.7) {
            transformedObject = transformObject(transformedObject);
        }
        
        // Add surrealist context/expansion
        let poemExtension = getSurrealistExtension();
        
        // Create final poem
        let finalPoem = `${transformedSubject} ${randomAction} ${transformedObject}${poemExtension}`;
        
        // Display the poem with animation
        const poemDisplay = document.getElementById('poem-display');
        if (poemDisplay) {
            poemDisplay.textContent = '';
            poemDisplay.classList.remove('animate-in');
            
            // Force reflow
            void poemDisplay.offsetWidth;
            
            poemDisplay.classList.add('animate-in');
            poemDisplay.textContent = finalPoem;
        }
    }
    
    // Helper functions for transformations
    function transformSubject(subject) {
        const transformations = [
            `The ghost of ${subject.toLowerCase()}`,
            `${subject} in reverse`,
            `A thousand ${subject.toLowerCase()}s`,
            `The memory of ${subject.toLowerCase()}`,
            `The absence of ${subject.toLowerCase()}`
        ];
        
        return transformations[Math.floor(Math.random() * transformations.length)];
    }
    
    function transformObject(object) {
        const transformations = [
            `${object} made of smoke`,
            `${object} from another time`,
            `${object} without substance`,
            `the idea of ${object}`,
            `${object} that never existed`
        ];
        
        return transformations[Math.floor(Math.random() * transformations.length)];
    }
    
    function getSurrealistExtension() {
        const extensions = [
            " while time stands still",
            " beneath the unconscious sky",
            " inside a dream of itself",
            " as reality dissolves",
            " beyond the edge of reason",
            " where memories fold into themselves",
            " through the doorway of perception",
            " against the fabric of logic",
            " when no one is watching",
            " across the landscape of desire"
        ];
        
        // 70% chance to add an extension
        if (Math.random() > 0.3) {
            return extensions[Math.floor(Math.random() * extensions.length)];
        } else {
            return "";
        }
    }
});