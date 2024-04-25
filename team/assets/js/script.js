window.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search);
    const name = decodeURI(urlParams.get('name'));//获取URL中name的元素
    // 使用split()方法按斜杠分隔符拆分值，并根据分隔结果进行处理
    var index_name = '';
    const nameArray = name.includes('?') ? name.split('?') : [name];
    if (nameArray[1]==='edu_qual=doctor'){
        index_name = '博士';
    } else if (nameArray[1]==='edu_qual=master'){
        index_name = '硕士';
    } else if (nameArray[1]==='edu_qual=unit'){
        index_name = '毕业生';
    }
    const resultContainers = document.getElementsByClassName('breadcrumbs_content');
    const resultContainer = resultContainers[0];
    //图片
    const img_ins = document.getElementsByClassName('blogd_d_thumb');
    const img_in = img_ins[0];
    //信息
    const informs = document.getElementsByClassName('blog_d_content_list');
    const resume_text = informs[0];
    const inform_text = informs[1];
    //标签
    const tags = document.getElementsByClassName('blog_tags');
    const tags_text = tags[0];
    //消息
    const send_in = document.getElementsByClassName('class');
    const send__text = send_in[0];

    //若名字为对应的人名，则显示其信息
    var urltt = '../data/'+index_name+'.xlsx'; // 您的 Excel 文件路径
    loadData(urltt, function (dictionary, matrix) {
    if (name) {

        var url_name = 'model.html?name='+name;
        // 使用reduce方法查找索引
        var indices = dictionary.reduce(function(acc, item, index) {
            if (item.url === url_name) {
                acc.push(index);
            }
            return acc;
        }, []);
        var item = dictionary[indices[0]];
        // 名字
        const h3Element = resultContainer.querySelector('h3');
        h3Element.innerText = item.name;
        //图片
        img_in.innerHTML = '<img src="../assets/img/member/'+item.img_png+'.png" alt="">';
        // 简介
        const resume_p = resume_text.querySelector('p');
        resume_p.innerText = item.resume;
        //信息
        const inform_p = inform_text.querySelector('p');
        var html_p = '<br>名 字：'+item.name+'';
        html_p +='<br>年 级：'+item.grad+'';
        html_p +='<br>专 业：'+item.maj+'';
        html_p +='<br>研 究 方 向 ：'+item.dire+'';
        html_p +='<br>工作及地点：'+item.job+'/'+item.loc+'';
        inform_p.innerHTML = html_p;
        //标签
        var tags_text_ul = tags_text.querySelector('ul');
        var html_tag = '';
        var value = item.tip;
        // 使用split()方法按斜杠分隔符拆分值，并根据分隔结果进行处理
        const valueArray = value.includes('/') ? value.split('/') : [value];
        for (i=0;i<valueArray.length;i++){
            html_tag += '<li><a href="">'+valueArray[i]+'</a></li>';
        }
        tags_text_ul.innerHTML = html_tag;
    }
    });
});