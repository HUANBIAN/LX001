/**
 * foreach的兼容代码
 */
// if (!Array.prototype.forEach) {
//
//     Array.prototype.forEach = function(callback, thisArg) {
//
//         var T, k;
//
//         if (this == null) {
//             throw new TypeError(' this is null or not defined');
//         }
//
//         // 1. Let O be the result of calling toObject() passing the
//         // |this| value as the argument.
//         var O = Object(this);
//
//         // 2. Let lenValue be the result of calling the Get() internal
//         // method of O with the argument "length".
//         // 3. Let len be toUint32(lenValue).
//         var len = O.length >>> 0;
//
//         // 4. If isCallable(callback) is false, throw a TypeError exception.
//         // See: http://es5.github.com/#x9.11
//         if (typeof callback !== "function") {
//             throw new TypeError(callback + ' is not a function');
//         }
//
//         // 5. If thisArg was supplied, let T be thisArg; else let
//         // T be undefined.
//         if (arguments.length > 1) {
//             T = thisArg;
//         }
//
//         // 6. Let k be 0
//         k = 0;
//
//         // 7. Repeat, while k < len
//         while (k < len) {
//
//             var kValue;
//
//             // a. Let Pk be ToString(k).
//             //    This is implicit for LHS operands of the in operator
//             // b. Let kPresent be the result of calling the HasProperty
//             //    internal method of O with argument Pk.
//             //    This step can be combined with c
//             // c. If kPresent is true, then
//             if (k in O) {
//
//                 // i. Let kValue be the result of calling the Get internal
//                 // method of O with argument Pk.
//                 kValue = O[k];
//
//                 // ii. Call the Call internal method of callback with T as
//                 // the this value and argument list containing kValue, k, and O.
//                 callback.call(T, kValue, k, O);
//             }
//             // d. Increase k by 1.
//             k++;
//         }
//         // 8. return undefined
//     };
// }


/**
 * 格式化日期
 * @param dt 日期对象
 * @returns {string} 返回值是格式化的字符串日期
 */
function getDates(dt) {
	var str = "";//存储时间的字符串
	//获取年
	var year = dt.getFullYear();
	//获取月
	var month = dt.getMonth() + 1;
	//获取日
	var day = dt.getDate();
	//获取小时
	var hour = dt.getHours();
	//获取分钟
	var min = dt.getMinutes();
	//获取秒
	var sec = dt.getSeconds();
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;
	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;
	str = year + "年" + month + "月" + day + "日 " + hour + ":" + min + ":" + sec;
	return str;
}


/**
 * 获取指定标签对象
 * @param id 标签的id属性值
 * @returns {Element}根据id属性值返回指定标签对象
 */
function my$(id) {
    return document.getElementById(id);
}


/**
 * 设置元素的文本内容
 * @param element 任意元素
 * @param text 任意文本内容
 */
function setInnerText(element, text) {
    if (typeof(element.textContent) == "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}


/**
 * 获取元素的文本内容
 * @param element 任意元素
 * @returns {*} 任意元素中的文本内容
 */
function getInnerText(element) {
    if (typeof(element.textContent) == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}


/**
 * 获取父级元素中的第一个子元素
 * @param element 父级元素
 * @returns {*} 父级元素中的子级元素
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}


/**
 * 获取父级元素中的最后一个子元素
 * @param element 父级元素
 * @returns {*} 最后一个子元素
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}


/**
 * 获取某个元素的前一个兄弟元素
 * @param element 某个元素
 * @returns {*} 前一个兄弟元素
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling
    } else {
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}


/**
 * 获取某个元素的后一个兄弟元素
 * @param element 某个元素
 * @returns {*} 后一个兄弟元素
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling
    } else {
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

/**
 * 获取某个元素的所有兄弟元素
 * @param element 某个元素
 * @returns {Array} 兄弟元素
 */
function getSiblings(element) {
    if (!element)return;
    var elements = [];
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);
        }
        ele = ele.previousSibling;
    }
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);

        }
        ele = ele.nextSibling;
    }
    return elements;
}

/**
 * 返回当前浏览器是什么类型的浏览器
 */
function userBrowser(){
    var browserName=navigator.userAgent.toLowerCase();
    if(/msie/i.test(browserName) && !/opera/.test(browserName)){
        console.log("IE");
    }else if(/firefox/i.test(browserName)){
        console.log("Firefox");
    }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){
        console.log("Chrome");
    }else if(/opera/i.test(browserName)){
        console.log("Opera");
    }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
        console.log("Safari");
    }else{
        console.log("不知道什么鬼!");
    }
}


/**
 * 为任意一个元素绑定事件:元素,事件类型,事件处理函数
 */
function addEventListener(element,type,fn) {
    if(element.addEventListener){
        //支持
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}


/**
 *任意元素解绑任意的事件 任意元素 事件类型  事件处理函数
 */
function removeEventListener(element,type,fn) {
    if(element.removeEventListener){
        element.removeEventListener(type,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fn);
    }else{
        element["on"+type]=null;
    }
}


/**
 * 获取的是页面向上或者向左卷曲出去的距离的值,返回的是对象
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function getScroll() {
    return {
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
        left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft||0
    };
}



//元素根据鼠标实时位置实时改变位置
  	var evt={
  	  //window.event和事件参数对象e的兼容
  	  getEvent:function (evt) {
  	    return window.event||evt;
  	  },
  	  //可视区域的横坐标的兼容代码
  	  getClientX:function (evt) {
  	    return this.getEvent(evt).clientX;
  	  },
  	  //可视区域的纵坐标的兼容代码
  	  getClientY:function (evt) {
  	    return this.getEvent(evt).clientY;
  	  },
  	  //页面向左卷曲出去的横坐标
  	  getScrollLeft:function () {
  	    return window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0;
  	  },
  	  //页面向上卷曲出去的纵坐标
  	  getScrollTop:function () {
  	    return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0;
  	  },
  	  //相对于页面的横坐标(pageX或者是clientX+scrollLeft)
  	  getPageX:function (evt) {
  	    return this.getEvent(evt).pageX? this.getEvent(evt).pageX:this.getClientX(evt)+this.getScrollLeft();
  	  },
  	  //相对于页面的纵坐标(pageY或者是clientY+scrollTop)
  	  getPageY:function (evt) {
  	    return this.getEvent(evt).pageY?this.getEvent(evt).pageY:this.getClientY(evt)+this.getScrollTop();
  	  }
  	}
	/*
	使用演示
  	document.onmousemove=function (e) {
  	  my$("im").style.left=evt.getPageX(e)+"px";
  	  my$("im").style.top=evt.getPageY(e)+"px";
  	}
  	*/

//获取任意一个元素的任意一个属性的当前的值---当前属性的位置值
function getStyle(element,attr) {
    return window.getComputedStyle? window.getComputedStyle(element,null)[attr]:element.currentStyle[attr]||0;
}

//设置任意元素的上下移动 宽高动画 透明度 层级显示
function animate(element, json, fn) {
    clearInterval(element.timeId);//清理定时器
    //定时器,返回的是定时器的id
    element.timeId = setInterval(function () {
        var flag = true;//默认,假设,全部到达目标
        //遍历json对象中的每个属性还有属性对应的目标值
        for (var attr in json) {
            //判断这个属性attr中是不是opacity
            if (attr == "opacity") {
                //获取元素的当前的透明度,当前的透明度放大100倍
                var current = getStyle(element, attr) * 100;
                //目标的透明度放大100倍
                var target = json[attr] * 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;//移动后的值
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") { //判断这个属性attr中是不是zIndex
                //层级改变就是直接改变这个属性的值
                element.style[attr] = json[attr];
            } else {
                //普通的属性
                //获取元素这个属性的当前的值
                var current = parseInt(getStyle(element, attr));
                //当前的属性对应的目标值
                var target = json[attr];
                //移动的步数
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;//移动后的值
                element.style[attr] = current + "px";
            }
            //是否到达目标
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            //清理定时器
            clearInterval(element.timeId);
            //所有的属性到达目标才能使用这个函数,前提是用户传入了这个函数
            if (fn) {
                fn();
            }
        }
    }, 20);
}
