<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
body,
dd,
dl,
dt,
form,
h1,
h2,
h3,
h4,
h5,
h6,
li,
ol,
p,
ul,
div {
	margin: 0;
	padding: 0
}

li,
ol,
ul {
	list-style: none;
	overflow: hidden
}

a {
	color: #483724;
	text-decoration: none;
}

a,
button,
input {
	-webkit-tap-highlight-color: rgba(255, 0, 0, 0);
}

img {
	margin: 0;
}

hr {
	height: 1px;
	border: none;
	border-top: 1px dotted #666;
}

.gray,
.gray a {
	color: gray;
}

.f12 {
	font-size: 12px;
}

.p10 {
	padding: 10px;
}

.mt10 {
	margin-top: 10px;
}

.red {
	color: red;
}

.blue {
	color: blue;
}

.green {
	color: green;
}

.clear {
	clear: both;
	overflow: hidden;
	display: block;
	font-size: 0;
	height: 0;
	line-height: 0;
}

.fright {
	float: right;
}

.center {
	text-align: center;
}

.span_right {
	float: right;
	padding: 10px;
}

.span_right img {
	width: 160px;
}

.sanzang {
	overflow: hidden;
	width: 100%;
}

.header_left {
	display: none;
}

.header {
	margin: 0;
	height: 39px;
	overflow: hidden;
	background: #ff7a18;
	line-height: 20px;
	width: 100%;
	background: #f1f1f1;
	box-shadow: 0 0 5px rgba(0, 0, 0, .5);
	z-index: 9999;
	background: -webkit-gradient(linear, 0 0, 0 100%, from(#FFF), to(#EBEBEB));
	background: -moz-linear-gradient(top, #FFF, #EBEBEB);
	overflow: hidden;
	height: 40px;
}

.header .logo_m {
	float: left;
	padding: 5px 0 0 15px;
}

.header .mini_nav {
	float: right;
	color: #fff;
	margin-top: 11px;
	padding: 0 5px;
	text-align: right;
}

.header .mini_nav a {
	color: #111;
	margin-right: 5px;
}

.header .sitemap {
	float: right;
	width: 23px;
	margin-top: 11px;
	text-align: right;
	margin-right: 10px;
}

/* path */
.current_left {
	margin: 6px 0 0 0;
	height: 35px;
	line-height: 36px;
	background: #fff;
	padding-left: 8px;
	border-top: 1px solid #cfc4b6;
	border-bottom: 1px solid #cfc4b6;
	border-radius: 2px;
	font-size: 14px;
	color: #999;
	overflow: hidden
}

.current_left a {
	color: #999;
}

.banner {
	margin: 3px 0 0 0;
}

.yaoqian {
	background-image: url(/img/chouqian/yaoqian.jpg);
	background-repeat: no-repeat;
	width: 140px;
	height: 40px;
	border: 0;
	background-color: none;
	outline: none;
	-webkit-appearance: none;
	cursor: pointer
}

.shengbei {
	background-image: url(/img/chouqian/shengbei.jpg);
	background-repeat: no-repeat;
	width: 140px;
	height: 40px;
	border: 0;
	background-color: none;
	outline: none;
	-webkit-appearance: none;
	cursor: pointer
}

/* content */
.c_1,
.c_2 {
	margin: 5px 0 2px 0;
	background: #fff;
	border-top: 1px solid #cfc4b6;
	border-bottom: 1px solid #cfc4b6;
	border-radius: 2px;
}

.c_1 h1,
.c1_title,
.inform_wrapper h1 {
	font-size: 16px;
	margin: 12px 0 0 8px;
	text-align: left;
	color: #86683C;
	height: 35px;
	border-bottom: 1px solid #dcd3c9;
	font-weight: bold;
}

.c_1 .title {
	height: 35px;
	border-bottom: 1px solid #dcd3c9;
	color: #333;
}

.c_1 .title h2 {
	font-size: 120%;
	margin-top: 12px;
	text-align: center;
	color: #86683C;
}

.c1_text {
	color: #666;
	font-size: 14px;
	text-align: left;
	padding: 8px;
	line-height: 180%;
}

.c1_text a {
	color: #00F;
	text-decoration: none;
	border-bottom-width: 1px;
	border-bottom-style: dotted;
	border-bottom-color: #5c3716;
}

.c1_text p {
	padding: 5px 0;
	font-size: 16px;
	color: #000;
	line-height: 180%;
}

.c1_form {
	text-align: center;
	padding: 15px;
	font-size: 14px;
	color: #000;
	line-height: 24px;
}

.c1_form p {
	padding: 3px 0;
}

.content {
	margin: 10px 0 2px 0;
	/* padding: 10px; */
	background: #fff;
	border-top: 1px solid #cfc4b6;
	border-bottom: 1px solid #cfc4b6;
	border-radius: 2px;
}

.content b {
	color: #86683c
}

.content p {
	padding: 5px 0;
	font-size: 16px;
	color: #000;
	line-height: 180%;
}

.content h3 {
	padding-left: 15px;
	line-height: 30px;
	border-left: 5px solid #795636;
	font-size: 16px;
	background: #f5f5f5;
	margin: 8px 0
}

.content table {
	border-collapse: collapse;
	border: 1px solid #c9c9c9;
}

.content table td {
	height: 20px;
	border: 1px solid #c9c9c9;
	padding: 5px;
}

.content .title h1 {
	font-weight: bold;
	text-align: center;
	color: #795636;
	padding-top: 5px;
	font-size: 18px;
	border-bottom: 1px dashed #b2b2b2;
	padding-bottom: 10px;
}

.content h2 {
	padding: 8px 8px 12px 0px;
	font-size: 16px;
	font-weight: 700;
	color: #86683c
}

.content .info {
	font-size: 14px;
	color: gray;
	padding: 10px;
	text-align: center;
}

/* nav */
.now2nav {
	margin: 5px 0 5px 0;
}

.now2nav ul {
	padding-left: 0px;
	margin: 5px 0 2px 0;
	font-size: 14px;
	overflow: hidden;
	background-color: #F0F0F0;
	border-top: 1px solid #cfc4b6;
	border-bottom: 1px solid #cfc4b6;
	border-radius: 2px;
}

.now2nav ul li {
	list-style: none;
	float: left;
	border-left: 1px solid #cfc4b6;
	border-right: 1px solid #cfc4b6;
	padding: 0 8px;
	height: 28px;
	margin-right: 2px;
	line-height: 28px;
	text-align: center;
	padding-bottom: 2px;
	background-color: #fff;
}

.now2nav ul li.thisnav {
	background-color: #86683C;
}

.now2nav ul li.thisnav a {
	color: #fff;
}

.inform_wrapper {
	margin: 0px 0 2px 0;
	background: #fff;
	border-top: 1px solid #cfc4b6;
	border-bottom: 1px solid #cfc4b6;
	border-radius: 2px
}

.inform_wrapper p {
	padding: 5px 0;
	font-size: 16px;
	color: #000;
	line-height: 180%;
}

/* listbox */
.c_sort .sort_title h2 {
	border-left: 5px solid #795636;
	font-size: 16px;
	font-weight: 700;
	color: #86683c;
	line-height: 16px;
	height: 16px;
	padding-left: 10px;
	padding: 5px 10px;
}

.listbox {
	margin: 10px 0;
	overflow: hidden;
	text-align: left;
	background: #fff;
	border-top: 1px solid #cfc4b6;
	border-bottom: 1px solid #cfc4b6;
}

.listbox .title {
	padding: 10px;
}

.listbox .title h2 {
	border-left: 5px solid #795636;
	font-size: 16px;
	font-weight: 700;
	color: #86683c;
	padding-left: 10px;
	color: #000;
	line-height: 16px;
	height: 16px;
	padding: 5px 10px;
}

.listbox .title h2 a {
	color: #804627;
}

.listbox .title h2 span {
	color: #8B2829;
	font-size: 18px;
}

.listbox .title .more {
	float: right;
	margin: 0;
	font-weight: bold;
	padding: 0;
	color: #BA4B3E;
	border-radius: 5px;
}

.listbox .title .more a {
	color: #972926;
	font-size: 14px;
}

/* pic_list */
.pic_list {
	margin: 0 10px;
}

.pic_list ul {
	width: 100%;
	margin: 0 auto;
}

.pic_list li {
	font-size: 16px;
	padding: 10px 0px;
	margin: 0;
	border-bottom: 1px dashed #ddd;
	overflow: hidden;
	list-style: none;
	text-align: left;
}

.pic_list li.text {
	padding: 10px 5px 10px 12px;
	margin: 0;
	background-size: 20px auto;
	background: url(/img/arrow.gif) center left no-repeat;
	border-bottom: 1px solid #f2f2f2;
	overflow: hidden;
	list-style: none;
}

.pic_list li:last-child {
	border: 0;
}

.pic_list li a {
	display: block;
	overflow: hidden;
}

.pic_list dl {
	margin: 0;
	padding: 0;
}

.pic_list dt {
	width: 120px;
	height: 80px;
	float: left;
	margin-right: 10px;
	position: relative;
}

.pic_list dt img {
	height: 80px;
	width: 120px;
	object-fit: cover;
	position: absolute;
}

.pic_list dd p {
	font-size: 14px;
	color: #999;
}

.pic_list dd .date {
	margin-top: 20px;
}

.pic_list dd .h3 {
	font-size: 16px;
	font-weight: normal;
	line-height: 150%;
	position: relative;
	color: #333;
	word-wrap: break-word;
	word-break: normal;
	-webkit-line-clamp: 1;
	line-clamp: 1;
	-webkit-box-orient: vertical;
	box-orient: vertical;
}

/* pages */
.pages {
	margin: 0;
	padding: 0;
	height: 50px;
	border-top: 1px solid #ddd;
}

.pages ul {
	float: left;
	padding: 12px 0px 12px 16px;
	margin: 0;
}

.pages ul li {
	float: left;
	font-family: Tahoma;
	line-height: 17px;
	margin-right: 6px;
	border: 1px solid #E9E9E9;
	padding: 4px 4px;
}

.pages ul li a {
	float: left;
	color: #555;
	display: block;
}

.pages ul li a:hover {
	color: #690;
	text-decoration: none;
}

.pages ul li.thisclass,
.pages ul li.thisclass a,
.pagebox ul li.thisclass a:hover {
	background-color: #F8F8F8;
	font-weight: bold;
}

.pages .pageinfo {
	line-height: 18px;
	padding: 2px 4px;
	color: #999;
}

.pages .pageinfo strong {
	color: #555;
	font-weight: normal;
	margin: 0px 2px;
}

/* form */
.inform {
	font-size: 100%;
	margin: 2px 8px 8px 8px;
	padding: 12px 0px 0px 0px;
	line-height: 42px;
}

.inform form {
	width: 90%;
	margin: auto;
}

.ipt {
	border: 1px solid #d0ad9a;
	background: #fff;
	padding: 2px;
	font-size: 16px;
	color: #333;
	line-height: 26px;
}

.select {
	color: #3e4144;
	font-size: 14px;
	line-height: 26px;
	padding: 2px;
	border: 1px solid #d0ad9a;
	height: 34px;
}

.line {
	border-top: 1px dashed #dcc4b0;
	margin: 8px;
}

.button {
	width: 95%;
	font-size: 16px;
	overflow: hidden;
	border: 0;
	text-align: center;
	margin: 5px auto 10px auto;
	height: 38px;
	line-height: 38px;
	background: #FF8A11;
	color: #fff;
	border-radius: 6px;
	display: block;
	-webkit-appearance: none;
}

.sbutton {
	overflow: hidden;
	font-size: 14px;
	margin: 5px;
	padding: 6px 12px;
	font-weight: bold;
	border-radius: 5px;
	border: 0;
	text-align: center;
	text-decoration: none;
	background: #FF8A11;
	color: #fff;
	-webkit-appearance: none;
}

/* sort */
.c_sort {
	width: 100%;
	margin: 5px 0 2px 0;
	background: #fff;
	border-top: 1px solid #cfc4b6;
	border-bottom: 1px solid #cfc4b6;
	border-radius: 2px;
	padding: 10px;
}

.c_sort .sort_title {
	padding-bottom: 10px;
	text-align: left;
}

.c_sort .sort_title h2 {
	border-left: 5px solid #795636;
	font-size: 16px;
	font-weight: 700;
	color: #86683c;
	line-height: 16px;
	height: 16px;
	padding-left: 10px;
	padding: 5px 10px;
}

.c_sort ul {
	padding: 0 1px 5px 1px;
}

.c_sort ul li {
	float: left;
	width: 88px;
	border-style: solid;
	border-width: 2px 1px 1px 1px;
	border-color: #86683c;
	font-size: 16px;
	height: 28px;
	line-height: 28px;
	text-align: center;
	background: #fff;
	margin-right: 6px;
	margin-bottom: 8px;
}

.c_sort ul li.nobor {
	margin-right: 0
}

/* footer */
#btn_top {
	opacity: .6;
	background: #666 url(/img/to_top.png) center 50% no-repeat;
	border-radius: 17px;
	position: fixed;
	right: 1px;
	bottom: 50px;
	border: solid 1px #555;
	width: 32px;
	height: 32px;
	display: block;
	z-index: 100001;
}

.sanzang_footer {
	font-size: 12px;
	text-align: center;
	margin-top: 15px;
	padding: 10px 0;
	border-top: 1px solid #e1dad2
}

/* loader */
.loader {
	background-color: #FFFFFF;
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 100000;
}

.loader-animate {
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAMAAAArU9sbAAAAllBMVEUAAAA5kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv85kv98v3f9AAAAMXRSTlMA+u4H8xwSDeG7KBapjYhP28EE9jfmpJoxItOALLFuQcxrZOrXdnPHVDyVe11aSIN5drPNPgAAAx5JREFUWMOlmOl2qlAMhbcyySCiBUFRUazzVXve/+Vuk2NZTgwHvx+uVjBk2MmJopxRkvvecBn0gqXt+ecZ1DEW8654ZO3lLhTQznZHvKNj70dohrWNRDm9rYZ6Rqsiki/7uBhkiZNkg208LLyL/qGOcCkk39eD9hhm5veEZDirdsS/eRGHby9nY+lRZ1VVmJ200XfLb4mlnbmJEhzpsWegCseWEZfcFXJau3vUkX9xsZy3RvjaboJ6Zt/8vNmbK+zJWGsmKZvF/PJEg3PSb6zuMd0emE/v7hSMMGxmjgf6HI5Sr3FQC9yRsSI1qGBNSX7OnSbpjbUBNRydHo2CDbkygCo5faxoTVfnpKgzpA7XIKEW1F2oM6OeWoExyZUr2hBTJ4xALFq5wkzIGdl40xe9qWlvzsFRph20IyPNUBzp7x9LtGRE7ZcD2LGQW8L19QCLEjRBWw6keuBCxUJrRjTbZliwS+0Zchccf19PaA1/3ofNumnPimMJfl9DtGfA46HLJWpPSGcTqNAmKnCT6r7mGpP+raqG64qxW2uFxoKBcjw6vxYjlJHQiYKophfngliGVeJdgg7LqsgtXy4JsVlRI9beoMmSsM7L9cJDb1OniUAQO+nz63mYYttk/msnnVeo/ms1ydEzLpzjWgxPENH5uad1zqspuNT1ZFNB2M5LibojObxzNN9hO/59WOltfPtcqka4sVyci5pKH1bcTgr9mOzkhvl3f1LkI+BaNeVfxMtsqhWHow3ihxJkoSlWn8UcXCjEr2JrcPVX4TURs2fAv1sa+uSMCQWkmPUrubIFI/06QgXtxNvxQy58+vcAFVjMj/uhFZEKTKhxJiNT7WFIkATVMH396fgYqy7NjHk9PYqAvx/84EMc7rQNPiT8kkF9yKBTfJP73EzvgM/IuoKI3Wq5pW5NiqfyzNhY5cVNdbHe17RHfGuO1MA7Jn1dtrNWk5zo73eJ3Hg2sRgKSZA1G0JMMN4MQscwzUm4//F64oZ+0lCPS26X0k2basHcTEtsLFcWFEj86auJ1IEy5mUbD4NIF3r0bR+3lwov/gPz4J/MfidXggAAAABJRU5ErkJggg==);
	background-size: 100% 100%;
	width: 34px;
	height: 34px;
	position: fixed;
	top: 50%;
	left: 50%;
	margin: -17px 0 0 -17px;
	-webkit-animation: loading-rotate 1s linear infinite;
	animation: loading-rotate 1s linear infinite
}

@-webkit-keyframes loading-rotate {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg)
	}

	to {
		-webkit-transform: rotate(1turn);
		transform: rotate(1turn)
	}
}

@keyframes loading-rotate {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg)
	}

	to {
		-webkit-transform: rotate(1turn);
		transform: rotate(1turn)
	}
}

/* read all */
.read-content {
	overflow: hidden;
	width: 100%;
}

.read-content p {
	margin-bottom: 10px;
	line-height: 180%;
	color: #000;
}

.read-content a {
	color: #00F;
	border-bottom-width: 1px;
	border-bottom-style: dotted;
	border-bottom-color: #5c3716;
}

.read-box {
	position: relative;
	z-index: 9;
	padding: 0 0 20px;
	margin-top: -220px;
	text-align: center;
}

.read_mask {
	height: 200px;
	background: -webkit-gradient(linear, 0 top, 0 bottom, from(rgba(255, 255, 255, 0)), to(#FFF));
	background: -o-linear-gradient(bottom, rgba(255, 255, 255, .1), rgba(255, 255, 255, 0));
}

.read-box .read_mod {
	background-color: #FFF;
}

.read-button,
.read-button:focus,
.read-button:link,
.read-button:visited {
	font-size: 1rem;
	color: #FF6651;
	background: #FFF;
	border-radius: .25rem;
	border: 1px solid #FF6651;
	line-height: 1.875rem;
}

.read-box .read_mod a {
	border: 1px solid #8B2829;
	width: 15rem;
	height: 2.5rem;
	line-height: 2.5rem;
	display: inline-block;
	vertical-align: top;
	color: #8B2829;
}

.read-box .read_mod a:hover {
	color: #8B2829;
}

.read-box .read_mod img {
	display: inline;
	width: .9375rem;
	height: auto;
	margin: 1.0625rem 0 0 .3125rem;
	vertical-align: top;
}
</style>
