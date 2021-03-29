
var addStar = (str, n) => {
	var i = str.length;
	for(i; i < n; i++) {
		str += "*";
	}
	return str;
}

var preHexList = (str, n, startPos) => {
	var i = startPos;
	var list = [];
	var j = 0;
	for(i, j ; i < n; i++, j++) {
		list[j] = str[i];
	}

	i = 0;
	for(i, j ; i < startPos; i++, j++) {
		list[j] = str[i];
	}

	var hexList = createSpace(list, n)

	return hexList;
}

var createSpaceMiddle = (list, n, midStartLeft, midEndLeft) => {
	const midStartRight = 5 * midStartLeft;
	const midEndRight = 2 * midEndLeft;
	var space = " ";
	var k = list.length;

	for(let i = 0; i <= midStartLeft; i++) {
		if(i >= midStartLeft && i <= midEndLeft) {
			list[i] = list[i] + space + "  ";
		}
		else {
			list[i] = list[i] + "  ";
			if(k > midStartRight && k < list.length) {
				list[k] = space + list[k];
				space += "    ";
			}
		}
		k--;
	}

	space = " ";
	l = list.length / 2;
	for(let j = list.length / 2; j > midStartLeft; j--) {
		if(j >= midStartLeft && j <= midEndLeft) {
			list[j] = list[j] + space + "  ";
		}
		else {
			list[j] = list[j] + "  ";
			if(l < midEndRight && l > list.length/2) {
				list[l] = space + list[l];
				space += "    ";
			}
		}
		l++;
	}
	return list;
}

var createSpace = (list, n) => {
	const midStartLeft = (n / 6);
	const midEndLeft = 2 * midStartLeft;
	var space = "";

	for(let i = midStartLeft; i >= 0; i--) {
		if(i >= midStartLeft && i <= midEndLeft) {
			list[i] = list[i];
		}
		else {
			space += "  ";
			list[i] = space + list[i];
		}
	}

	space = "";
	for(let j = midStartLeft + 1; j <= (n / 2); j++) {
		if(j >= midStartLeft && j <= midEndLeft) {
			list[j] = list[j];
		}
		else {
			space += "  ";
			list[j] = space + list[j];
		}
	}
	var spacedList = createSpaceMiddle(list, n, midStartLeft, midEndLeft);
	return spacedList;
}

var createHexList = (str, n, startPos) => {
	var startAddedStr = addStar(str, n);
	var hexList = preHexList(startAddedStr, n, startPos);
	var finalHexList = [];

	var i = 0;
	var j = hexList.length;

	while(true) {
		if(i === 0) {
			finalHexList[i] = hexList[i];
		}
		else if(i === (n/2)) {
			finalHexList[i] = hexList[j]; 
			break;
		}
		else {
			finalHexList[i] = hexList[i] + hexList[j]
		}
		j--;
		i++;
	}
	return finalHexList;
}

var printHexagon = (str, n, startPos) => {
	if(n % 6 !== 0) {
		return "n should be multiple of 6";
	}
	if(n < 1 && n > 60) {
		return "n should be between 1 & 60";
	}
	var list = createHexList(str, n, startPos);

	for(let string of list) {
		console.log(string);
	}
	return "Done"
}




var str = "abcd";
var n = 6;
var startPos = 2;
console.log(printHexagon(str, n, startPos))