webpackJsonp([0],{"./js/component/Test.js":function(e,t,r){"use strict";(function(e){var n,a,o,l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(s,i){"object"==l(t)&&"object"==l(e)?e.exports=i(r("../../node_modules/react/react.js"),r("../../node_modules/react-bootstrap/es/index.js")):(a=[r("../../node_modules/react/react.js"),r("../../node_modules/react-bootstrap/es/index.js")],n=i,o="function"==typeof n?n.apply(t,a):n,!(void 0!==o&&(e.exports=o)))}(void 0,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(t,r){t.exports=e},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),l=n(o),s=r(2),i=n(s),u=function(e){var t,r=e.icon,n=e.additionalClass,o="fa-"+r,s=(0,i.default)((t={fa:!0},a(t,""+o,!0),a(t,""+n,!0),t));return l.default.createElement("i",{className:s,"aria-hidden":"true"})};u.propTypes={icon:o.PropTypes.string.isRequired,additionalClass:o.PropTypes.string.isRequired},t.default=u},function(e,t,r){var n,a;!function(){function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a="undefined"==typeof n?"undefined":l(n);if("string"===a||"number"===a)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(r.apply(this,n));else if("object"===a)for(var s in n)o.call(n,s)&&n[s]&&e.push(this&&this[s]||s)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=r:(n=[],a=function(){return r}.apply(t,n),!(void 0!==a&&(e.exports=a)))}()},function(e,r){e.exports=t},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=("undefined"==typeof t?"undefined":l(t))&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":l(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(0),p=n(u),c=r(3),d=r(1),f=n(d),h=function(e){function t(){var e,r,n,l;a(this,t);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.onInputChange=function(){return function(e){e.preventDefault(),n.props.onChangeFilter(e.target.value)}},n.onClearFilter=function(){return function(e){e.preventDefault(),n.props.onChangeFilter("")}},l=r,o(n,l)}return s(t,e),i(t,[{key:"render",value:function(){return p.default.createElement(c.FormGroup,{controlId:"select-filter-"+this.props.keyName},p.default.createElement(c.InputGroup,null,p.default.createElement(c.FormControl,{type:"text",value:this.props.filterText,placeholder:"Enter text",onChange:this.onInputChange()}),p.default.createElement(c.InputGroup.Button,null,p.default.createElement(c.Button,{onClick:this.onClearFilter()},p.default.createElement(f.default,{icon:"times",additionalClass:"fa-fw"})))))}}]),t}(p.default.Component);h.propTypes={filterText:u.PropTypes.string,keyName:u.PropTypes.string,onChangeFilter:u.PropTypes.func},t.default=h},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=("undefined"==typeof t?"undefined":l(t))&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":l(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(0),c=n(p),d=r(3),f=r(2),h=n(f),m=r(4),b=n(m),y=r(1),g=n(y),P=function(e){function t(e){o(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.onChangeFilter=function(e){r.setState({filterText:e,currentPage:1})},r.onPageNavigate=function(e){return function(t){r.setState({currentPage:e})}},r.onRowsPerPageChange=function(){return function(e){r.setState({rowsPerPage:e.target.value,currentPage:1})}},r.onSortChange=function(e){return function(t){var n=r.state.sortedProp;e!==r.state.sortedProp.prop?(n.prop=e,n.isAscending=!0):n.isAscending=!r.state.sortedProp.isAscending,r.setState({sortedProp:n})}};var n=void 0!==e.rowsPerPage?e.rowsPerPage:5,a={};if(void 0!==e.initialSort)for(var l=!1,i=0;!l&&i<e.tableHeader.length;)e.tableHeader[i].prop===e.initialSort.prop&&(l=!0,e.tableHeader[i].sortable===!0&&(a=e.initialSort)),i++;return r.state={sortedProp:a,rowsPerPage:n,currentPage:1,filterText:""},r}return i(t,e),u(t,[{key:"isPropFilterable",value:function(e){for(var t=0,r=!1,n=!1;!r&&t<this.props.tableHeader.length;)this.props.tableHeader[t].prop===e&&(r=!0,this.props.tableHeader[t].filterable===!0&&(n=!0)),t++;return n}},{key:"sortInitialData",value:function(){var e=this,t=this.props.tableBody;return this.state.sortedProp!=={}&&!function(){var r=e.state.sortedProp.prop,n=e.state.sortedProp.isAscending?1:-1;t.sort(function(e,t){return e[r]<t[r]?-1*n:e[r]>t[r]?1*n:0})}(),t}},{key:"filterSortedData",value:function(e){var t=this,r=e;return""!==this.state.filterText&&(r=e.filter(function(e){for(var r=!1,n=0,a=Object.keys(e).length;!r&&n<a;)t.isPropFilterable(Object.keys(e)[n])&&e[Object.keys(e)[n]].includes(t.state.filterText)&&(r=!0),n++;return r})),r}},{key:"paginateFilteredData",value:function(e){var t=e,r=(this.state.currentPage-1)*this.state.rowsPerPage,n=this.state.currentPage*this.state.rowsPerPage;return t=t.slice(r,n)}},{key:"generateFirstPrevButtons",value:function(e,t,r){var n=[],a={key:this.props.keyName+"-page-first",disabled:!r,onClick:this.onPageNavigate(e)},o={key:this.props.keyName+"-page-prev",disabled:!r,onClick:this.onPageNavigate(t-1)};return n.push(c.default.createElement(d.Button,a,"First"),c.default.createElement(d.Button,o,"Previous")),n}},{key:"generateNextLastButtons",value:function(e,t,r){var n=[],a={key:this.props.keyName+"-page-next",disabled:!r,onClick:this.onPageNavigate(t+1)},o={key:this.props.keyName+"-page-last",disabled:!r,onClick:this.onPageNavigate(e)};return n.push(c.default.createElement(d.Button,a,"Next"),c.default.createElement(d.Button,o,"Last")),n}},{key:"renderPagination",value:function(e){var t=e.length,r=Math.ceil(t/this.state.rowsPerPage),n=void 0,a=0,o=[],l=!0,s=!0;for(1===this.state.currentPage?(n=1,l=!1,s=r>1):this.state.currentPage===r&&1!==r?(n=r-2>0?this.state.currentPage-2:1,s=!1):n=this.state.currentPage-1,o.push(this.generateFirstPrevButtons(1,this.state.currentPage,l));a<3&&n<=r;){var i={key:this.props.keyName+"-page-btn-"+n,onClick:this.onPageNavigate(n),active:this.state.currentPage===n};o.push(c.default.createElement(d.Button,i,n)),a++,n++}return o.push(this.generateNextLastButtons(r,this.state.currentPage,s)),c.default.createElement(d.ButtonGroup,{className:"btn-group-page-nav"},o)}},{key:"renderFilterOption",value:function(){for(var e=null,t=0,r=!1;!r&&t<this.props.tableHeader.length;)this.props.tableHeader[t].filterable===!0&&(r=!0),t++;return r&&(e=c.default.createElement(b.default,{onChangeFilter:this.onChangeFilter,filterText:this.state.filterText})),e}},{key:"renderPaginationOption",value:function(){var e=this,t=[],r=[],n=void 0!==this.props.rowsPerPage?this.props.rowsPerPage:5;return t.push(n),void 0!==this.props.rowsPerPageOption&&(this.props.rowsPerPageOption.forEach(function(e){t.includes(e)||t.push(e)}),t=t.sort(function(e,t){return e<t?-1:e>t?1:0})),t.forEach(function(t){var n={key:e.props.keyName+"-page-opt-"+t,value:t};r.push(c.default.createElement("option",n,t))}),c.default.createElement(d.Form,{inline:!0},c.default.createElement(d.FormGroup,{controlId:"formControlPagination"},"Show ",c.default.createElement(d.FormControl,{defaultValue:this.state.rowsPerPage,componentClass:"select",placeholder:"select",onChange:this.onRowsPerPageChange()},r)," options per page"))}},{key:"renderTableHeader",value:function(){for(var e=[],t=0;t<this.props.tableHeader.length;t++){var r="sort",n=null,a=(0,h.default)({"thead-th-default":!0,sortable:this.props.tableHeader[t].sortable===!0}),o={key:this.props.keyName+"-th-"+t,onClick:this.props.tableHeader[t].sortable===!0?this.onSortChange(this.props.tableHeader[t].prop):void 0,className:a};this.props.tableHeader[t].sortable===!0&&(this.state.sortedProp!=={}&&this.state.sortedProp.prop===this.props.tableHeader[t].prop&&(r=this.state.sortedProp.isAscending?"sort-asc":"sort-desc"),n=c.default.createElement(g.default,{icon:r,additionalClass:"fa-fw"})),e.push(c.default.createElement("th",o,this.props.tableHeader[t].title,c.default.createElement("span",{className:"pull-right"},n)))}return e}},{key:"renderTableBody",value:function(e){var t=[];if(0!==e.length)for(var r=0;r<e.length;r++)t.push(c.default.createElement("tr",{key:this.props.keyName+"-row-"+r,className:"tbody-tr-default"},this.renderSingleRow(e,r)));else t.push(c.default.createElement("tr",{key:this.props.keyName+"-row-zero-length",className:"tbody-tr-default"},c.default.createElement("td",{className:"tbody-td-default",colSpan:this.props.tableHeader.length},"No results to be shown.")));return t}},{key:"renderSingleRow",value:function(e,t){for(var r=[],n=0;n<this.props.tableHeader.length;n++)r.push(c.default.createElement("td",{key:this.props.keyName+"-col-"+t+n,className:"tbody-td-default"},e[t][this.props.tableHeader[n].prop]));return r}},{key:"render",value:function(){var e=this.sortInitialData(),t=this.filterSortedData(e),r=this.paginateFilteredData(t),n=this.renderPagination(t),o=this.props.tableClass||"",l=(0,h.default)(a({"table-datatable":!0},""+o,!0));return c.default.createElement(d.Row,null,c.default.createElement(d.Col,{xs:12,md:4},this.renderFilterOption()),c.default.createElement(d.Col,{xs:12,md:4},this.renderPaginationOption()),c.default.createElement(d.Col,{xs:12,md:4,className:"text-right"},n),c.default.createElement(d.Col,{xs:12},c.default.createElement(d.Table,{className:l},c.default.createElement("thead",{className:"thead-default"},c.default.createElement("tr",{className:"thead-tr-default"},this.renderTableHeader())),c.default.createElement("tbody",{className:"tbody-default"},this.renderTableBody(r)))))}}]),t}(c.default.Component);P.propTypes={tableHeader:p.PropTypes.arrayOf(p.PropTypes.object).isRequired,tableBody:p.PropTypes.arrayOf(p.PropTypes.object).isRequired,tableClass:p.PropTypes.string,rowsPerPage:p.PropTypes.number,rowsPerPageOption:p.PropTypes.arrayOf(p.PropTypes.number),initialSort:p.PropTypes.object,keyName:p.PropTypes.string.isRequired},t.default=P}])})}).call(t,r("../../node_modules/webpack/buildin/module.js")(e))},"./js/store/index.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return e.toLowerCase().replace(/ +/g,"-").replace(/\.+/g,"")}r("../../node_modules/babel-polyfill/lib/index.js");var o=r("../../node_modules/react/react.js"),l=n(o),s=r("../../node_modules/react-dom/index.js"),i=r("../../node_modules/react-bootstrap/es/index.js"),u=r("./js/component/Test.js"),p=n(u),c=r("../../node_modules/faker/index.js"),d=n(c);r("./scss/style.scss");for(var f=[{title:"Username",prop:"username",sortable:!0,filterable:!0},{title:"Name",prop:"realname",sortable:!0},{title:"Location",prop:"location"}],h=[],m=0;m<100;m++){var b=d.default.name.findName();h.push({username:a(b),realname:b,location:d.default.address.streetAddress()})}(0,s.render)(l.default.createElement(i.Grid,null,l.default.createElement(i.Row,null,l.default.createElement(i.Col,{xs:12},l.default.createElement("h1",null,l.default.createElement("a",{href:"https://github.com/Imballinst/react-bs-datatable"},"React Bootstrap Datatable")),l.default.createElement("hr",null),l.default.createElement("h2",null,"Example usage"),l.default.createElement("strong",null,"index.js"),l.default.createElement("pre",null,"import React from 'react'; // Import React\nimport { render } from 'react-dom'; // Import render method\nimport { Grid, Row, Col } from 'react-bootstrap'; // Import react-bootstrap scripts\nimport Datatable from 'react-bs-datatable'; // Import this package\n\nconst header = [\n  { title: 'Username', prop: 'username', sortable: true, filterable: true },\n  { title: 'Name', prop: 'realname', sortable: true },\n  { title: 'Location', prop: 'location' }\n];\n\nlet body = [\n  { username: 'i-am-billy', realname: 'Billy', location: 'Mars' },\n  { username: 'john-nhoj', realname: 'John', location: 'Saturn' }\n];\n\nrender(\n  <Datatable\n    tableHeader={header}\n    tableBody={body}\n    keyName=\"userTable\"\n    tableClass=\"striped hover responsive\"\n    rowsPerPage={5}\n    rowsPerPageOption={[5, 10, 15, 20]}\n    initialSort={{prop: \"username\", isAscending: true}}\n  />,\n  document.getElementById('react-test')\n);"),l.default.createElement("strong",null,"style.scss"),l.default.createElement("pre",null,".table-datatable {\n  .thead-default {\n    .thead-tr-default {\n      .thead-th-default {\n        &.sortable { // If and only if a column is sortable\n          &:hover {\n            background: #A7FAE8; // Your color of choice\n            cursor: pointer; // Changes the cursor into a pointer on hover\n          }\n        }\n      }\n    }\n  }\n\n  .tbody-default {\n    .tbody-tr-default {\n      .tbody-td-default {\n        // do what you want\n      }\n    }\n  }\n}"),l.default.createElement("hr",null))),l.default.createElement(i.Row,null,l.default.createElement(i.Col,{xs:12},l.default.createElement("h2",null,"Rendered Table"),l.default.createElement(p.default,{tableHeader:f,tableBody:h,keyName:"userTable",tableClass:"striped hover responsive",rowsPerPage:5,rowsPerPageOption:[5,10,15,20],initialSort:{prop:"username",isAscending:!0}})))),document.getElementById("react-test"))},"./scss/style.scss":function(e,t){}},["./js/store/index.js"]);