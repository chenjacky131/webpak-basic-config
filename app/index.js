import _ from 'lodash';
import '../css/style.css';
var $ = require('jquery'); // 引用全局jquery
function component () {
  var element = document.createElement('div');
  element.id="cc";
  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello1','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
$('#dd').html('dd按钮11');
$('#dd').on('click',function(){
	$('#cc').toggle();
});
