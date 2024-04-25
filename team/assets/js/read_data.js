
function loadData(excelUrl, callback) {
    var dataArray = [];
    var dictionary = {};
    var matrix = [];

    var xhr = new XMLHttpRequest();
    xhr.open('GET', excelUrl, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function (e) {
        // 当请求成功完成时执行该函数。它检查 HTTP 状态是否为 200（表示请求成功）
        if (xhr.status === 200) {
            var data = new Uint8Array(xhr.response);
            var workbook = XLSX.read(data, { type: 'array' });
            var worksheet = workbook.Sheets[workbook.SheetNames[0]];
            var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            var headerRow = jsonData[0];
            for (var i = 0; i < headerRow.length; i++) {
                var key = headerRow[i];
                dictionary[key] = [];
            }

            for (var j = 1; j < jsonData.length; j++) {
                var rowData = jsonData[j];
                var rowObject = {};
                var hasValue = false; // 检查是否有非空值的标志
                for (var k = 0; k < rowData.length; k++) {
                    var value = rowData[k];
                    if (value) {
                        // 检查值是否为非空
                        var key = headerRow[k];
                        dictionary[key].push(value);
                        rowObject[key] = value;
                        hasValue = true; // 设置标志为 true
                    }
                }
                if (hasValue) {
                    // 只有在至少有一个非空值时才添加到数组中
                    rowObject['text'] = '';
                    dataArray.push(rowObject);
                    matrix.push(rowData);
                }
            }
            // 字典数组换算
            callback(dataArray, matrix);
        } else {
            console.error('Error:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Error: 未能加载数据.');
    };
    xhr.send();
}


function excelDateToNormalDate(excelDate) {
    var date = new Date((excelDate - 1) * 24 * 60 * 60 * 1000 + Date.UTC(1900, 0, 1));
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // 月份从 0 开始，因此需要加 1
    var day = date.getDate();
    return year + "年" + (month < 10 ? "0" + month : month) + "月" + (day < 10 ? "0" + day : day)+ "日" ;
}
