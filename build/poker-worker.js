onmessage = function (e) {
  const result = e.data[0] * e.data[1];
  const randomOrder = (count, cards) => {
    let resultCount = [];
    const getRemainList = (resultCount, cards) => {
      let curDoneList = Array.from(new Set(resultCount)).map((e) => ({
        ...cards[e],
      }));
      let remainList = cards.filter(
        (e) => !curDoneList.map((inner) => inner.order).includes(e.order)
      );
      return { curDoneList, remainList };
    };
    // let count = Math.round(Math.random() * cardsInfo.length);
    for (var i = 0; i < count; i++) {
      resultCount.push(Math.round(Math.random() * (cards.length - 1)));
    }
    //   console.log(
    //     cards,
    //     Array.from(new Set(resultCount)).length === resultCount.length
    //   );
    if (resultCount.length === Array.from(new Set(resultCount)).length) {
      try {
        return resultCount.map((e) => ({ ...cards[e] }));
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const { curDoneList, remainList } = getRemainList(resultCount, cards);
        // return randomOrder(count, cards);
        return [
          ...curDoneList,
          ...randomOrder(count - curDoneList.length, remainList),
        ];
      } catch (err) {
        // 因随机位数过高导致性能开销负载处理。。
        const { curDoneList, remainList } = getRemainList(resultCount, cards);
        // let curDoneList = Array.from(new Set(resultCount)).map((e) => ({
        //   ...cards[e],
        // }));
        // let remainList = cards.filter(
        //   (e) => !curDoneList.map((inner) => inner.order).includes(e.order)
        // );
        return [
          ...curDoneList,
          ...randomOrder(count - curDoneList.length, remainList),
        ];
      }
    }
  };
  if (e.data[0] === "getRandom") {
    const count = e.data[2];
    const cards = e.data[3];
    let result = {
      dataIndex: e.data[1],
      dataArray: randomOrder(count, cards),
    };
    //   console.log(result);
    postMessage(result);
  } else {
    const workerResult = "Result: " + result;
    postMessage(workerResult);
  }
};
