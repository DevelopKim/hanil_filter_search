//get meta tags string
function get_page_title(){
  var page_title = document.querySelectorAll('[property="og:title"]')[0].content
  return page_title;
}

function get_description(){
  var description = document.querySelectorAll('[name="description"]')[0].content
  return description;
}

//get search tags string
function get_search_tags(){
  var goods_tags = document.querySelectorAll('div.goods_tag > ul > li > a')
  var tags = '';
  goods_tags.forEach(function(e, i) {
  var tmp_str = e.innerHTML.replace('#', '');
  if(i > 0)  tmp_str = e.innerHTML.replace('#',',');
  tags += tmp_str;
  })
  return tags;
}

console.log(get_search_tags());
