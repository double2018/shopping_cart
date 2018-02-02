
//var newProduct = {name:'',color:'',price:0,amount:0,default_nums:1,add_nums:0,ischange:'btn-danger'};
// 商品列表json
var goodsTable = new Vue({
  el: '.content',
  data: {
    // 用于保存每件商品的对象
    goodItem: {},
  	// 用于保存用户添加到购车的商品数组
  	buyLists: [],
    //要删除的索引
    nowIndex: -100,
    //消息
    msg: "",
    //要从数组中移除的商品名
    nm: "",
    //是否结算
    suc: false,
    fButton: "",//显示分类列表属性
    //isAdd: true,
  	// 默认的商品列表
    goods: [
      {name:'iphone 7 plus 手机',color:'银色',price:100,amount:0,default_nums:1,add_nums:0},
	    {name:'华硕笔记本电脑',color:'黑色',price:100,amount:0,default_nums:1,add_nums:0},
	    {name:'九阳电热水瓶5L',color:'白色',price:100,amount:0,default_nums:1,add_nums:0}
    ],
    //用于增加新商品到列表
    newProduct: {name:'',color:'',price:0,amount:0,default_nums:1,add_nums:0},
  },  
  computed: {
    count: function() {
      var num = 0;
      for(var i in this.goods){
          num += parseInt(this.goods[i].default_nums);
      }
      return num;
    },
    total: function() {
      var totals = 0;
      for(var i in this.goods){
          totals += parseInt(this.goods[i].price * this.goods[i].default_nums);
      }
      return totals;
    },
    addShoppingNum: function() {
      var addShoppingNum = 0;
      for(var i in this.goods){
          addShoppingNum += this.goods[i].add_nums;
      }
      return addShoppingNum;
    },
    costPaid: function() {
        var costPaid = 0;
        for(var i in this.goods){
          costPaid += parseInt(this.goods[i].price * this.goods[i].add_nums);
      }
      return costPaid;
    },
    shoppingListFilter: function() { //通过计算属性返回列表，实现分类
      var goods = this.goods;
      var temp = [];
      if(this.fButton == '' || this.fButton == '全部'){

        return goods;
      }else if(this.fButton == '已加入'){
        for(var i in goods){
          if(goods[i].add_nums != 0){
           temp.push(JSON.parse(JSON.stringify(goods[i])));
          }
        }
        return temp;
      }else if(this.fButton == '未加入'){
        for(var i in goods){
          if(goods[i].add_nums == 0){
            temp.push(JSON.parse(JSON.stringify(goods[i])));
          }
        }
        return temp;
      }
      
    }
  },
  methods: {
    reduce: function(good) {
      if (good.default_nums <= 1) return;
      good.default_nums --;
      //good.ischange = 'btn-danger';
    },
    /*addNum: function(good) {
      good.default_nums += 1;
      //good.ischange = 'btn-danger';
    },*/
    addProduct: function() {
      //var len = this.goods.length;
      //追加商品
      //this.goods.push(Object.assign({},this.goods[len-1]));//浅拷贝
      //this.goods.push(Object.assign({}, this.newProduct));//浅拷贝
      this.goods.push(JSON.parse(JSON.stringify(this.newProduct)));//深拷贝
    },
    removeProduct: function(index,nm) {
      //删除商品
      if(index == -2){
        this.goods = [];
        this.buyLists = [];
      }else{
        this.goods.splice(index,1);
        //删除buyLists中的商品
        var len = this.buyLists.length;
        for(var i=len-1; i>=0; i--){
          if(this.buyLists[i].name == nm){
              this.buyLists.splice(i,1);
          }
        }
      }
    },
  	addToCar: function(good) {
  		if(good.add_nums == good.default_nums) return;
  		good.add_nums = good.default_nums;

      this.goodItem = {name: good.name, nums: good.add_nums};
      // 创建用户当前添加的商品对象
  		// 开始向数组中提添加当前物品，这里存在3种情况
      // 1、用户未添加过该商品，则直接向数组中push
      // 2、用于已经添加了该商品、并且未做购买数量修改，则不向数组中添加
      // 3、用于已经添加了该商品、但是修改了购买数量，直接替换数组中的该商品对象
      var index = this.buyLists.findIndex((value, index, arr) => { //ES6对数组扩展查找方法
         return value.name == this.goodItem.name;
      });
      //Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
      index === -1 ? this.buyLists.push(this.goodItem) : Object.assign(this.buyLists[index], this.goodItem);
    },
    balance: function() {
      if(this.suc){
          console.log(this.buyLists);
          if(this.buyLists.length != 0){
            this.msg = '结算成功！';
            console.log("结算成功！");
          }else{
            this.msg = '购物车还没有加入商品,请先加入到购物车！';
            console.log("购物车还没有加入商品,请先加入到购物车！");
          }
      }
    }/*,
    showFunction: function(n) {//$ref 操作DOM 显示或隐藏列表
      if(n == '0'){
        for(var i in this.goods){
          if(this.goods[i].add_nums != 0){
              this.$refs.good[i].style.display = "none";
          }else{
            this.$refs.good[i].style.display = "";
          }
        }
      }else if(n=='all'){
        for(var i in this.goods){
            this.$refs.good[i].style.display = "";
          }
      }else if(n == '1'){
        for(var i in this.goods){
          if(this.goods[i].add_nums != 0){
              this.$refs.good[i].style.display = "";
          }else{
            this.$refs.good[i].style.display = "none";
          }
        }
      }
   }*/
  },
  updated: function() {//数据更新完成后
      //this.$refs.good[0].style.display == "none";
      //console.log(this.$refs.good);
      //console.log(this.$el);
  }
})
