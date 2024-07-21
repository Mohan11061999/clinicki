import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const {
    name,
    age,
    gender,
    ipNumber,
    preOpExamVideo,
    preOpInvestigation,
    diagnosis,
    procedure,
    intraOpVideo,
    postOpFollowUp,
  } = topic;

  return (
    <EditTopicForm
      id={id}
      name={name}
      age={age}
      gender={gender}
      ipNumber={ipNumber}
      preOpExamVideo={preOpExamVideo}
      preOpInvestigation={preOpInvestigation}
      diagnosis={diagnosis}
      procedure={procedure}
      intraOpVideo={intraOpVideo}
      postOpFollowUp={postOpFollowUp}
    />
  );
}
