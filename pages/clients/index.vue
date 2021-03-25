<template lang="pug">
    div.place
      sidebar
      filters
      div.headline
        h4.title Clients
        div.two-side-items
            i.bi.bi-box-arrow-in-down.icon
            button.create-button.btn.btn-primary(type="button") + Add Client
      div.small-nav
        a.active(href="#")
            i.bi.bi-zoom-in.nav-icon
            | Overview
        a(href="#")
            i.bi.bi-view-stacked.nav-icon
            | List View
        a(href="#")
            i.bi.bi-grid.nav-icon
            | Segment
      hr.line
      table
        thead
            tr.tr-head
                th.table-titles.client-col CLIENT
                th.table-titles TAGS
                th.table-titles CREATED
                th
        tbody
            tr.client-info(v-for="client in filteredClients.slice((currentPage-1)*maxPerPage, currentPage * maxPerPage)")
                td.fisrt-td
                  img.avatar(:src="`https://robohash.org/${client.email}.png`")
                  div
                    p.name-text {{client.name.first}}  {{client.name.last}}
                    p.email-text {{client.email}} 
                td
                    div.list-of-tags(v-for="tag in client.tags")
                        p.one-tag.V.firstItem(v-if="tag==='VIP Client'", :class="client.tags.length === 1 ? 'lastItem':'notLastItem'") {{tag }}
                    div.list-of-tags(v-for="tag in client.tags")
                        p.one-tag.E(v-if="tag==='Early Adopter'" :class="[client.tags.includes('VIP Client') ? 'notFirstItem':'firstItem', client.tags.includes('Third Tag') ? 'notLastItem':'lastItem']") {{tag }}
                    div.list-of-tags(v-for="tag in client.tags")
                        p.one-tag.T.lastItem(v-if="tag==='Third Tag'" :class="client.tags.length === 1 ? 'firstItem':'notFirstItem'") {{tag }}                
                td.created-text {{client.created | formatedDates}} 
                td 
                    i.bi.bi-chevron-right
        
      div.footer
        div.pages-message Rows per page 
            span.bold-and-black {{ filteredClients.length < 10 ? filteredClients.length:10}} 
            span out of {{filteredClients.length}}
        div
            button.arrow-button(:disabled="currentPage==1" @click="decreasePageNum")
                i.bi.bi-chevron-left
            button.page-button(v-for="pageNum in [1,2,3,4,5,6,7]" @click="changePage(pageNum)" v-if="pageNum * maxPerPage <= (filteredClients.length + 10)" :class="pageNum===currentPage ? 'focusedPage':'notFocusedPage'")
                p.numbers {{pageNum}}
            button.arrow-button(:disabled="currentPage * maxPerPage >= filteredClients.length" @click="increasePageNum")
                i.bi.bi-chevron-right
                
      
</template>

<script>
import {mapGetters} from 'vuex';
const moment = require("moment");

export default {
    components: {
    },
    data(){
        return {
            currentPage: 1,
            maxPerPage: 10,
        }
    },
    filters:{
        formatedDates: function(value) {
            return moment(value).format('DD/MM/YYYY')
        }
    },
    methods:{
        changePage(num) {
            this.currentPage = num;
        },
        increasePageNum(){
            this.currentPage++;
        },
        decreasePageNum(){
            this.currentPage--;
        }
    },
    computed:{
        pickedDate(){
            return this.$store.state.pickedDate
        },
        mailFilteringMethod(){
            return this.$store.state.mailFilteringMethod
        },
        mailFilterText(){
            return this.$store.state.mailFilterText
        },
        ...mapGetters({
            clients: 'activeClients',
        }),
        filteredClients(){
            let mailFilteredClients = []
            if (this.mailFilteringMethod == "contains"){
                console.log('this is from contains')
                mailFilteredClients =  this.clients.filter((client)=> client.email.includes(this.mailFilterText))
                console.log('list: ', mailFilteredClients)
            }
            else if (this.mailFilteringMethod == "startsWith"){
                console.log('this is from startswith')
                mailFilteredClients =  this.clients.filter((client)=> client.email.startsWith(this.mailFilterText))
            }
            else {
                mailFilteredClients = this.clients
            }
            if(this.pickedDate){
                return mailFilteredClients.filter((client)=> {
                    client.created = moment(client.created).format('YYYY-MM-DD')     
                    return client.created === this.pickedDate})
            }
            else{
                return mailFilteredClients
            }
        }
    },
    created(){
        this.$store.dispatch('fetchClients')
    }
    
}
</script>

<style lang="scss" scoped>
.bold-and-black{
    color: black;
    font-weight: bold;
}
.pages-message{
    color: $gray;
    font-size: $sm-font;
}
.numbers{
    font-size: $sm-font;
}
.arrow-button{
    border: none;
    background: $light-gray;
    color: $dark-gray;
    outline: none;
    font-size: $sm-font;
    padding: 0px 2px 0px 2px;
}
.page-button{
    border: none;
    background: white;
    outline: none;
}
.page-button:focus{
    color:black;
}

.notFocusedPage{
    color:$gray;
}
.focusedPage{
    color: black;
}
.avatar {
  vertical-align: middle;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display:inline-block;
  background: #c2ebeb;
  margin-right: 7px;
} 
.firstItem{
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
}
.lastItem{
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;

}
//first letter of tag names
.V{
    background: #edf6fe;
    color: #6fb4f5;

}
//first letter of tag names
.E{
    color:#d775ee;
    background: #faeefd;

}
//first letter of tag names
.T{
    color: #52c3b5;
    background: #edf9f7;
}
.name-text{
    color: black;
    font-weight: 600;
    margin:0;
    padding: 0;
    font-size: $sm-font;
}
.one-tag{
    margin: 0 2px 0 2px;
    font-size: $xs-font;
    padding-right:5px;
    padding-left:5px;
    font-weight: bold;
}
.client-col{
    width:40%;
}
tbody{
    font-size: $sm-font;
}
.list-of-tags{
    display: inline-block;

}
.email-text{
    color:$dark-gray;
    margin:0;
    padding: 0;
    font-size: $xs-font;
}
.created-text{
    color:$dark-gray;
    font-size: $sm-font;
}
.client-info{
    border-bottom: 1px solid $light-gray;
}
td{
    padding: 5px 0 5px 0;
}
.client-info:hover{
    box-shadow: 5px 5px 8px $light-gray;
}
table{
    width:100%;
}
.table-titles{
    color:$gray;
    text-decoration: none;
    font-size: $sm-font;
    font-family: inherit;
    font-weight: 400;
    padding-bottom: 8px;
}

.place {
    margin-left: 450px;
    margin-right: 50px;
}
.footer{
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.headline{
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.fisrt-td{
    display: flex;
}
.title {
    font-weight: bold;
    color: black;
    display: inline-block;

}
 .two-side-items{
    display: inline-block;

 }
.icon{
    background: $light-gray;
    font-size: 1.5rem;
    padding: 0 5px 5px 5px;
    color: $dark-gray;
    margin-right: 15px;
}
.create-button{
    margin-right: 30px;
    background: $purple;
    margin-bottom: 7px;
}
.small-nav {
  overflow: hidden;
  background-color: white;
}

.small-nav a {
  float: left;
  display: block;
  text-align: center;
  padding: 5px 5px;
  text-decoration: none;
  font-size: $sm-font;
  border-bottom: 3px solid transparent;
  color: $gray;

}

.small-nav a:hover {
  border-bottom: 3px solid #6464e6;
}

.small-nav a.active {
  border-bottom: 3px solid #6464e6;
  color: black;
}
.line{
    margin-top: 0;
}
.nav-icon{
    margin-right: 10px;
}
.tr-head{
    border-bottom: 1px solid #ecedee;
}


</style>
