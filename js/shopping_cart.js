
//var newProduct = {name:'',color:'',price:0,amount:0,default_nums:1,add_nums:0,ischange:'btn-danger'};
// 商品列表json
var goodsTable = new Vue({
  el: '#goods-table',
  data: {
    // 用于保存每件商品的对象
    goodItem: {},
  	// 用于保存用户添加到购车的商品数组
  	buyLists: [],
  	// 默认的商品列表
    goods: [
      {name:'iphone 7 plus 手机',color:'银色',price:100,amount:0,default_nums:1,add_nums:0,ischange:'btn-danger'},
	    {name:'华硕笔记本电脑',color:'黑色',price:100,amount:0,default_nums:1,add_nums:0,ischange:'btn-danger'},
	    {name:'九阳电热水瓶5L',color:'白色',price:100,amount:0,default_nums:1,add_nums:0,ischange:'btn-danger'}
    ],
    //用于增加新商品到列表
    newProduct: {name:'',color:'',price:0,amount:0,default_nums:1,add_nums:0,ischange:'btn-danger'}
  },  
  computed: {
    count: function(){
      var num = 0;
      for(var i in this.goods){
          num += parseInt(this.goods[i].default_nums);
      }
      return num;
    },
    total: function() {
      var total = 0;
      for(var i in this.goods){
          total += parseInt(this.goods[i].price * this.goods[i].default_nums);
      }
      return total;
    },
    addShoppingNum: function(){
      var addShoppingNum = 0;
      for(var i in this.goods){
          addShoppingNum += this.goods[i].add_nums;
      }
      return addShoppingNum;
    },
    costPaid: function(){
        var costPaid = 0;
        for(var i in this.goods){
          costPaid += parseInt(this.goods[i].price * this.goods[i].add_nums);
      }
      return costPaid;
    }
  },
  methods: {
    reduce: function(good) {
      if (good.default_nums <= 1) return;
      good.default_nums --;
      good.ischange = 'btn-danger';
    },
    addNum: function(good) {
      good.default_nums += 1;
      good.ischange = 'btn-danger';
    },
    addProduct: function() {
      //var len = this.goods.length;
      //追加商品
      //this.goods.push(Object.assign({},this.goods[len-1]));
      this.goods.push(Object.assign({}, this.newProduct));
    },
    removeProduct: function(good,index) {
      //删除商品
      this.goods.splice(index,1);
    },
  	addToCar(good) {
  		if(good.add_nums == good.default_nums) return;
  		good.add_nums = good.default_nums;
      good.ischange = 'btn-success';
      this.goodItem = {name: good.name, nums: good.add_nums};
      // 创建用户当前添加的商品对象
  		// 开始向数组中提添加当前物品，这里存在3种情况
      // 1、用户未添加过该商品，则直接向数组中push
      // 2、用于已经添加了该商品、并且未做购买数量修改，则不向数组中添加
      // 3、用于已经添加了该商品、但是修改了购买数量，直接替换数组中的该商品对象
      var index = this.buyLists.findIndex((value, index, arr) => {
         return value.name === this.goodItem.name;
      });
      //Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
      index === -1 ? this.buyLists.push(this.goodItem) : Object.assign(this.buyLists[index], this.goodItem);
    }, 
    balance() {
      console.log(this.buyLists);
    }
  }
})

