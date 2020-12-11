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
  var goods_tags = document.querySelectorAll('#INTRODUCE > div > div > ul > li > a');
  var tags = '';
  goods_tags.forEach(function(e, i) {
  var tmp_str = e.innerHTML.replace('#', '');
  if(i > 0)  tmp_str = e.innerHTML.replace('#',',');
  tags += tmp_str;
  })
  return tags;
}

function prepend_infos(page_title, description, tags){
  var oDiv = document.createElement('div');
  var strInnerHTML = '<ul><li>Page Title : ' + page_title + '</li><li>description: ' + description + '</li><li>태그 : '+ tags + '</li></ul>';
  oDiv.innerHTML = strInnerHTML;
  oDiv.style.cssText = "color: blue; border: 1px solid black";
  var oDivInfo = document.querySelectorAll('#wrap > div > div.prd_detail_basic > div.info')[0];
  if( oDivInfo == undefined ) oDivInfo = document.querySelectorAll('#content > div > div > div')[3];
  oDivInfo.prepend(oDiv);
}

var page_title = get_page_title();
var description = get_description();
var tags = get_search_tags();
prepend_infos(page_title, description, tags);
