# Flexbox tutorial

## CONTAINER PROPERTIES

![](/resources/i1.png)

![](/resources/i2.png)

### flex-direction

- The flex items flow along the main axis(left to right by default), which can be changed using **flex-direction: row-reverse**, now items will be placed/flow from right to left, but the cross axis still remains same.

- **flex-direction: column**, now the main axis is from top to bottom, so items flow from top to bottom.

![](/resources/i3.png)

- similarly, **flex-direction: column-reverse**, main axis from bottom to top.

### flex-wrap

- lets assume we give very large widths to each of the box, but they will still stay inside the container, because **f;ex-wrap:nowrap**, by default.

- **flex-wrap:wrap**, now they will take their true widths, if a container does not fit, it **moves in the direction of the cross-axis**.

- **wrapping happens in the direction of the cross-axis**, **flex-wrap:wrap-reverse**, in this case the cross axis reverses(from bottom to top), so boxes wrap in upward direction, so its logical that the first row will start from the extreme bottom, so that wrapping happens in upward subsequent rows.

### justify-content

- how the space is distributed among the flex-items,**in the main-axis**.

![](/resources/i4.png)

- **justify-content:flex-end**, now it is worthy noting that **flex-start** and **flex-end**, are relative to the main-axis, if main-axis from l to r, flex-start is l, if main axis from r to l,flex-start is r. In justify-content:flex-end, all the items are pushed to the flex-end, **justify-content:flex-start** is the default.

![](/resources/i5.png)

- **justify-content:center**, items of each row(because that is their main axis), are pushed towards the center.

![](/resources/i6.png)

- **justify-content:space-between**

![](/resources/i7.png)

- **justify-content:space-around**, every element has same space around it, you might notice that the space between elements are double the space of the edges, this justifies that every item has same space around it.

![](/resources/i8.png)

- **justify-content:space-evenly**, same space between any two items or an item and an edge.

![](/resources/i9.png)

> NOTE: It is worthy noting that if the flex-direction is set tok column, then the main-axis is from top to bottom, ans it is natural and understood, that the cross-axis will automatically become from left to right, so cross and main are **relative**.

### align-items

- how the space is distributed among the flex-items,**in the cross-axis**.

- **align-items:stretch** is the default value, the below image have these css rules also flex-direction: row, flex-wrap: wrap, justify-content: center.

![](/resources/i11.png)

- **align-items:center**,in the below image, it should be noted that the cross axis is from l to r, so space will be manipulated in that direction, but i have set the justify-content:center, therefore it looks like this.

![](/resources/i10.png)

> Now lets give them sizes.
>
> ![](/resources/i12.png)
>
> - flex-direction: row;
>   flex-wrap: wrap;
>   justify-content: center;
>   align-items: baseline;
> - The above styles are applied to the below image, the items are aligned across the cross-axis basically according to their bases of the character(1,2,3,4), all numbers are on the same level.
>
> ![](/resources/i13.png)

## align-content

In CSS flexbox layout, both **align-items** and **align-content** properties control the alignment of flex items in the **cross axis** (vertical axis for row layout and horizontal axis for column layout) when there's extra space available in the container.

However, they work in slightly different ways:

- **align-items**: This property aligns flex items along the cross axis of the container. It applies to all flex items individually, and the value of **align-items** is applied to each item. This means that if you have multiple items with different heights, **align-items** will align them individually based on their height. The possible values for align-items are **stretch (default), flex-start, flex-end, center, and baseline**.

- **align-content**: This property aligns the flex lines within the flex container when there's extra space available in the cross axis. **It applies to the whole line of flex items, rather than to individual items**. **This means that if you have multiple lines of items, align-content will align the lines as a group**. The possible values for align-content are stretch (default), flex-start, flex-end, center, space-between, space-around, and space-evenly.

**In summary, align-items controls the alignment of individual flex items along the cross axis, while align-content controls the alignment of entire lines of flex items within the container.**

### Thr above is also the case with, justify-items and justify-content.

In CSS flexbox layout, justify-items and justify-content properties control the alignment of flex items in the **main axis** (horizontal axis for row layout and vertical axis for column layout) when there's extra space available in the container.

Similar to align-items and align-content, they work in slightly different ways:

- justify-items: This property aligns flex items along the main axis of the container. **It applies to all flex items individually, and the value of justify-items is applied to each item**. This means that if you have multiple items with different widths, justify-items will align them individually based on their width. **The possible values for justify-items are auto (default), normal, stretch, start, end, center, flex-start, flex-end, self-start, self-end, baseline, and first baseline.**

- justify-content: This property **aligns the flex lines(that is individual lines)** within the flex container **when there's extra space available in the main axis**. It applies to the whole line of flex items, rather than to individual items. **This means that if you have multiple lines of items, justify-content will align the lines as a group**. The possible values for justify-content are flex-start, flex-end, center, space-between, space-around, space-evenly, and stretch (default).

In summary, justify-items controls the alignment of individual flex items along the main axis, while justify-content controls the alignment of entire lines of flex items within the container.

## FLEX ITEMS PROPERTIES(applied to a item)

### align-self

- applied to a flex item, used to override the alignment along the cross axis.

- the following properties were applied
- display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

- to box 3, align-self:flex-start

![](/resources/i15.png)

### Manipulating the items sizing to match custom layouts, till now we did not change the size of an item using flex.

![](/resources/i16.png)

### flex-basis

- The flex-basis property specifies the initial size of a flex item along the main axis before any remaining space is distributed among the flex items. It sets the default size of a flex item before any growing or shrinking is applied based on the available space in the container.

- The following properties were applied to the below image
- flex-direction: row;
  justify-content: space-between;
  align-items: center;

![](/resources/i17.png)

Now, if we apply flex-basis:50%, to the first div.

![](/resources/i18.png)
