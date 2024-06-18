let form=document.getElementById(`form`)
let inputField=document.getElementById(`story`)
let createButton=document.getElementById(`create`)
let text=document.getElementById(`text`)
let fieldAlert=document.getElementById(`para`)
let todoContainer=document.getElementById(`todoContainer`)
let clearButton=document.getElementById(`clear`)




let storiesArray=[]



function displayStory(){
  todoContainer.textContent = ''; // Clear previous stories
  if (storiesArray.length === 0) {
    text.textContent = 'No Stories Entered';
    text.style.color = '#d3d3d3';
  } else {
    storiesArray.forEach(story => {
      // Create a container div for each story
      let storyContainer = document.createElement('div');
      storyContainer.classList.add('story-container');
      storyContainer.textContent = story.userStory;
      
      // Append the story container to the todoContainer
      todoContainer.appendChild(storyContainer);
    });
  }
  }


form.addEventListener(`submit`,collectStory)

function collectStory(event){
  event.preventDefault()
  let story=inputField.value
  if(story.length==0){
    fieldAlert.textContent=`Please enter a story`
  }
  else{
    fieldAlert.textContent=``
    let storyObject={
      userStory:story
    }
    storiesArray.unshift(storyObject)
    localStorage.setItem(`storiesArray`,JSON.stringify(storiesArray))
    form.reset()
    fetchStory()
  }
}

function fetchStory(){
  if(localStorage.getItem(`storiesArray`)){
    storiesArray=JSON.parse(localStorage.getItem(`storiesArray`))
  }
  displayStory()
}
fetchStory()

clearButton.addEventListener(`click`,function(){
  if(storiesArray.length !==0){
    storiesArray=[]
    localStorage.removeItem(`storiesArray`)
    displayStory()
  }
})