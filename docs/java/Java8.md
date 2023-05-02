# Java 8 特性介绍

## Lambda 表达式

Lambda 表达式是 Java 8 中最受欢迎的特性之一。它允许你以更简洁的方式编写代码，尤其是对于只包含单个方法的接口的实现，比如函数式接口。

下面是一个 Lambda 表达式的示例：

```java
public interface MyInterface {
    int doSomething(int a, int b);
}

public class MyLambdaTest {
    public static void main(String[] args) {
        MyInterface myLambda = (a, b) -> a + b;
        int result = myLambda.doSomething(2, 3);
        System.out.println("Result: " + result);
    }
}
输出：

makefile
Copy code
Result: 5
Stream API
Java 8 中引入了 Stream API，使得对集合的操作变得更加简单和易读。使用 Stream API 可以方便地进行筛选、排序、聚合等操作。

下面是一个 Stream API 的示例：

java
Copy code
List<String> list = Arrays.asList("apple", "banana", "orange", "pear", "peach");

List<String> result = list.stream()
    .filter(str -> str.startsWith("p"))
    .sorted()
    .collect(Collectors.toList());

System.out.println("Result: " + result);
输出：

makefile
Copy code
Result: [peach, pear]
Optional 类
在 Java 8 中，Optional 类被引入以解决可能出现的 null 值问题。使用 Optional 类可以让代码更加健壮和安全。

下面是一个 Optional 类的示例：

java
Copy code
public class MyOptionalTest {
    public static void main(String[] args) {
        String str = null;
        Optional<String> optional = Optional.ofNullable(str);
        String result = optional.orElse("default");
        System.out.println("Result: " + result);
    }
}
输出：

sql
Copy code
Result: default
以上就是 Java 8 中一些重要的特性，它们的出现使得 Java 编程变得更加简单和便捷。

Copy co
