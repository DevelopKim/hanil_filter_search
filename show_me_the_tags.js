//get meta tag strings
function get_page_title(){
  var page_title = document.querySelectorAll('[property="og:title"]')[0].content
  return page_title;
}

function get_description(){
  var description = document.querySelectorAll('[name="description"]')[0].content
  return description;
}

console.log(get_page_title());
console.log(get_description());
