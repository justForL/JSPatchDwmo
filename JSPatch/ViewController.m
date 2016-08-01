//
//  ViewController.m
//  JSPatch
//
//  Created by James on 16/8/1.
//  Copyright © 2016年 Apple. All rights reserved.
//

#import "ViewController.h"
#import "JPEngine.h"

@interface ViewController ()
@property (nonatomic, strong) NSArray *array;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    NSString *js = [NSString stringWithContentsOfFile:[[NSBundle mainBundle]pathForResource:@"main.js" ofType:nil] encoding:NSUTF8StringEncoding error:nil];
    if (js.length >0) {
        
        [JPEngine startEngine];
        [JPEngine evaluateScript:js];
        
    }
    //注释掉上面语句 保证下面方法执行时一定crash
    [self crashArray];
    
}

- (void)crashArray {;
    self.array = [NSArray arrayWithObjects:@[@"123",@"321"], nil];
    [self.array objectAtIndex:3];
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
