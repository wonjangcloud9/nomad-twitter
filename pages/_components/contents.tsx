const listOfItem10 = [
  {
    id: 1,
    name: "item1",
    author: "아서왕",
    description: "설명입니다.",
  },
  {
    id: 2,
    name: "item2",
    author: "아서왕",
    description: "설명입니다.",
  },
  {
    id: 3,
    name: "item3",
    author: "아서왕",
    description: "설명입니다.",
  },
  {
    id: 4,
    name: "item4",
    author: "아서왕",
    description: "설명입니다.",
  },
  {
    id: 5,
    name: "item5",
    author: "아서왕",
    description: "설명입니다.",
  },
  {
    id: 6,
    name: "item6",
    author: "아서왕",
    description: "설명입니다.",
  },
  {
    id: 7,
    name: "item7",
    author: "아서왕",
    description: "설명입니다.",
  },
  {
    id: 8,
    name: "item8",
    author: "아서왕",
    description: "설명입니다.",
  },
  {
    id: 9,
    name: "item9",
    author: "아서왕",
    description: "설명입니다.",
  },
  {
    id: 10,
    name: "item10",
    author: "아서왕",
    description: "설명입니다.",
  },
  {
    id: 10,
    name: "item10",
    author: "아서왕",
    description: "설명입니다.",
  },
  {
    id: 10,
    name: "item10",
    author: "아서왕",
  },
  {
    id: 10,
    name: "item10",
    author: "아서왕",
  },
  {
    id: 10,
    name: "item10",
    author: "아서왕",
  },
];

const randomWiseSayings = [
  "아무것도 하지 않으면 아무것도 일어나지 않는다.",
  "시작이 반이다.",
  "행동이 모든 것을 바꾼다.",
  "끝까지 가는 것이 중요하다.",
  "포기하지 않는 한 성공한다.",
  "끝까지 가면 반드시 성공한다",
];

interface ContentsProps {
  username: string | undefined;
}

export default ({ username }: ContentsProps) => {
  return (
    <div>
      <div className="pt-12  bg-white shadow-xl px-3 w-96">
        <h1 className="text-2xl font-bold mb-2">안녕하세요, {username}님</h1>
        <p className="text-sm text-gray-500 mb-2">
          {
            randomWiseSayings[
              Math.floor(Math.random() * randomWiseSayings.length)
            ]
          }
        </p>
        {listOfItem10.map((item) => (
          <div key={item.id} className="m-3 bg-white text-black">
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-sm">{item.description}</p>
            <p className="text-xs text-gray-500">{item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
