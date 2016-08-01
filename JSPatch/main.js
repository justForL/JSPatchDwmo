require('UIView,UIColor');

defineClass('ViewController', {
            //覆盖已有方法
            crashArray: function() {
//            //对象方法调用JS写的方法
//            self.addRedView();
//            //对象方法调用带参数的方法
//            self.printNsstring("123");
            console.log("crashArray did run");
            },
            //JS添加的方法
            addRedView: function() {
            var redView = UIView.alloc().initWithFrame({x:0, y:0, width:100, height:100});
            redView.setCenter(self.view().center());
            redView.setBackgroundColor(UIColor.redColor());
            self.view().addSubview(redView);
            
            //需要注意 利用转换工具 并不能将NSLog进行转换,输出时候还是需要用js语句输出 否则crash
            console.log("success");
            },
            //JS添加带参数的方法
            printNsstring: function(str) {
            console.log("addRedView did run");
            console.log(str);
            },
            
            //替换系统方法   替换viewDidLoad无效 根据生命周期来看 viewWillAppear由系统调用 在viewDidLoad之后 所以替换这个方法有效
            viewWillAppear: function(animated) {
            self.super().viewWillAppear(animated);
            self.crashArray();
            self.addRedView();
            self.printNsstring("changed success");
            
            //调用类方法
            ViewController.shared();
            },
});

//JS定义类方法
defineClass('ViewController', {
            //对象方法
          },
     {
            //类方法 定义方式是一样的,只是位置不同
            shared: function() {
            console.log(self);
            }
            
      }
);


