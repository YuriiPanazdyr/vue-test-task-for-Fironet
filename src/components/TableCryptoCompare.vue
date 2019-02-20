<template>
	  <table class="table-coins" cellspacing="0" cellpadding="0" align="center">
		  <thead>
			  <tr>
				  <th>#</th>
				  <th></th>
				  <th>Coin</th>
				  <th>PRICE</th>
				  <th>SUPPLY</th>
			  </tr>
			</thead>
			<tbody>
			  <tr v-for="(element, index) in results">
				  <td class="place">{{ index+1 }}</td>
				  <td class="thumb"><img v-bind:src="'https://www.cryptocompare.com' + element.CoinInfo.ImageUrl" alt=""></td>
				  <td class="name"> <span class="fullName">{{element.CoinInfo.FullName}}</span> <br>  <span class="name">{{element.CoinInfo.Name}}</span></td>
				  <td class="price"><div class="price-value">{{'$ '+element.RAW.USD.PRICE}}</div></td>
				  <td class="supply">{{element.RAW.USD.SUPPLY}}</td>
			  </tr>
			</tbody>
	  </table>
</template>


<script>

export default {
	name: 'TableCryptoCompare',
	data: () => ({
		refreshDataInterval: ''
	}),
	beforeMount(){ 
		this.api_query()

		this.refreshDataInterval = setInterval(function(){
			this.api_query()
		}.bind(this), 300000);
	},
	computed: {
		results() {
			return this.$store.getters.results
		}
	},
	methods: {
		api_query() {
			this.$store.dispatch('api_query')
		}
	}
	
}
</script>

<style scoped>
.table-coins {
	width: auto;
	background: #FFF;
    font-size: 16px;
    color: #121212;
    border: none;
    border-collapse: collapse;
	margin-bottom: 0;
	box-shadow: 0px 0px 10px rgba(0,0,0,0.75);
}
.table-coins>thead>tr>th {
    color: #333;
	taxt-align:center;
    padding: 5px;
    line-height: 1.42857143;
    vertical-align: middle;
    font-weight: bold;
    font-size: 13px;
	border-bottom: 1px solid #0dd763;
}
.table-coins>tbody>tr>td {
	vertical-align: middle;
	padding: 5px;
    text-align: right;
    position: relative;
	border: 1px solid #dedede;
}
.table-coins .place {
	color: #97a4b5;
    font-weight: bold;
    text-align: right;
    border-right: 2px solid #97a5b6;
}
.table-coins .place:hover {
    background: #98A5B5;
    border-right: 1px solid #616F82;
    color: #FFF;
}
.table-coins .thumb {
	width: 30px;
	border-right: 0px;
}
.table-coins .thumb img {
	width: 25px;
	height: 25px;
}
.table-coins .name {
	border-left: 0px;
	text-align: left;
}
.table-coins .name .fullName {
	color: #121212;
	font-weight: 900;
}
.table-coins .price {
	text-align: center;
}

.table-coins .price .price-value {
	background: #f5f5f5;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 4px;
    border: 1px solid #EEE;
    text-align: center;
    white-space: nowrap;
}

.table-coins .supply {
	text-align: center;
}
</style>