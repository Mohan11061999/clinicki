import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

// const getTopics = async () => {
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//   try {
//     const res = await fetch(`${apiUrl}/api/topics`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };
const getTopics = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    return { topics: [] }; // Return an empty array in case of an error
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();
  console.log("Topics: ", topics);

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-center"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.name}</h2>
            <div className="text-slate-500 gap-1">
              ⏲️{t.age} yrs 👨‍👩‍👧‍👦{t.gender} #️⃣{t.ipNumber} ⚡{t.diagnosis} 🛏️
              {t.procedure} 🗣️{t.preOpInvestigation}
              🚩{t.postOpFollowUp}
            </div>
          </div>

          <div className="flex gap-4 ">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
