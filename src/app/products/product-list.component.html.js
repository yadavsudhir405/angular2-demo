/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}());
"panel panel-primary" >
    /** @class */ (function () {
        function class_2() {
        }
        return class_2;
    }());
"panel-heading" >
    {};
{
    pageTitle;
}
/div>
    < div;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"panel-body" >
    /** @class */ (function () {
        function class_3() {
        }
        return class_3;
    }());
"row" >
    /** @class */ (function () {
        function class_4() {
        }
        return class_4;
    }());
"col-md-2" > Filter;
By: /div>
    < div;
var default_2 = /** @class */ (function () {
    function default_2() {
    }
    return default_2;
}());
"col-md-4" >
    type;
"text"[(ngModel)] = "filterText" /  >
    /div>
    < /div>
    < div;
var default_3 = /** @class */ (function () {
    function default_3() {
    }
    return default_3;
}());
"row" >
    /** @class */ (function () {
        function class_5() {
        }
        return class_5;
    }());
"col-md-6" >
    Filetred;
By: {
    {
        filterText;
    }
}
/h3>
    < /div>
    < /div>
    < div;
var default_4 = /** @class */ (function () {
    function default_4() {
    }
    return default_4;
}());
"table-responsive" >
    /** @class */ (function () {
        function class_6() {
        }
        return class_6;
    }());
"table" * ngIf;
"products && products.length" >
    /** @class */ (function () {
        function class_7() {
        }
        return class_7;
    }());
"btn-primary"(click) = "toggleImage()" >
    {};
{
    showImage ? 'Hide' : 'show';
}
Image
    < /button>
    < /th>
    < th > Product < /th>
    < th > Code < /th>
    < th > Available < /th>
    < th > Price < /th>
    < th > 5;
Star;
Rating < /th>
    < /tr>
    < /thead>
    < tbody >
     * ngFor;
"let product of products" >
     * ngIf;
"showImage"[src] = "product.imageUrl"[title] = "product.productName"[style.width.px] = "imageWidth"[style.margin.px] = "imageMargin"
    > /td>
    < td > {};
{
    product.productName;
}
/td>
    < td > {};
{
    product.productCode;
}
/td>
    < td > {};
{
    product.releaseDate;
}
/td>
    < td > {};
{
    product.price | currency;
    'INR';
    true;
    '1.2-2';
}
/td>
    < td > {};
{
    product.starRating;
}
/td>
    < /tr>
    < /tbody>
    < /table>
    < /div>
    < /div>
    < /div>;
