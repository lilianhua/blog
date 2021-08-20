const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容1',
      createTime: 1629436449133,
      author: 'zhangsan',
    },
    {
      id: 2,
      title: '标题2',
      content: '内容2',
      createTime: 1629436489228,
      author: 'zhangsan',
    },
  ];
};

module.exports = {
  getList,
};
