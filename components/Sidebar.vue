<template lang="pug">
    div.sidenav
      img.avatar-logo(src="@/assets/triangleLogo.jpg")
      h2.title Verpex Inc.
      a.arrow(href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false')
        i.bi.bi-chevron-down(style="color:$dark-gray;")
      div.options
        a(href="#")
            i.bi.bi-clipboard-data.icon
            |  Dashboard
        a(href="/clients") 
            i.bi.bi-people-fill.icon
            |  Clients
            .small-icon.eight 8
        a(href="#")
            i.bi.bi-basket-fill.icon
            |   Baskets
        a(href="#")
            i.bi.bi-calculator-fill.icon
            |   Billing
        a(href="#")
            i.bi.bi-box.icon
            |   Products
        a(href="#")
            i.bi.bi-life-preserver.icon
            |   Support
        a(href="#")
            i.bi.bi-gear.icon
            |   Settings
      div.icons
        div.avatar-with-icon
          img.avatar(src="@/assets/work.jpg")
          i.bi.bi-chevron-down.small-icon.down-arrow
        div.avatar-with-icon.bell
          i.bi.bi-bell-fill.bell 
          .small-icon.number 3 
      p.sidebar-footer 🖤 Powered by Company
</template>

<style lang="scss" scoped>
.avatar {
  vertical-align: middle;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: 20px;
} 
.avatar-logo{
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 20%;
  display: inline-block;
  margin: 0px 7px 0px 12px;

}
.avatar-with-icon{
    display: inline-block;
}
.small-icon{
    border-radius: 50%;
    width: 13px;
    color: white;
    font-size: $xs-font;
}
.eight{
  height: 15px;
  width: 20px;
  background: $purple;
  display: inline-block;
  margin-left: 70px;
  text-align: center;

}
.down-arrow{
    padding: 2px 2px 2px 2px;
    margin: 10px 0px 0 -6px;
    background: $purple;
    height: 12px
}
.number{
  background: orange;
  font-weight: bold;
  height: 15px;
  margin: 0px -27px 0px 0px;
  text-align: center;
  padding: 0 0 7px 0;
  float:right;
  
  
}
.bell {
    float: right;
    color:$dark-gray; 
    margin: 0 20px 0 0; 
    font-size: 1.5rem;

}

.options {
    margin-left: 5px;
    margin-top: 50px;
}

.sidebar-footer{
    color:#495159;
    background: #1e2732;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-bottom: 0;
    height: 40px;
    font-size: $sm-font;
    text-align: center;
    padding: 8px 7px 0 0;
    
}
.title {
    color: white;
    font-weight: bold;
    font-size: $md-font;
    display: inline-block;
    margin: 20px 0 0 5px;

}
.arrow{
  float: right; 
  margin: 15px 12px 0 0px;
  outline: none;

}
.icons{ 
    position: absolute;
    width: 100%;
    bottom: 50px;
}

.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #151e29;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  color: $dark-gray;
  display: block;
  font-size: $sm-font;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-weight:normal;
}

.icon {
    margin-right: 6px;
}

.sidenav a:hover {
  color: white;
  background: #272d36;
}

</style>
