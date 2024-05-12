function loadData(jsonUrl, callback) {

    fetch(jsonUrl)
        .then(response => response.json())
        .then(jsonData => {
            var dataArray = [];
            var dictionary = {};
            var matrix = [];
            // 进行字典和数组的处理
            // 示例：假设JSON数据包含一个名为 "data" 的数组和一个名为 "dictionary" 的对象
            dataArray = jsonData.data;
            dictionary = jsonData.dictionary;

            // 调用回调函数，并传递数据
            callback(dataArray, dictionary, matrix);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
