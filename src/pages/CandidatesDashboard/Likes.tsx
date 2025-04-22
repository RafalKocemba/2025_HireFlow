import { BasicIcon } from "../../components/ui/BasicIcon";
import { useCandidateContext } from "../../hooks/useCandidateContext";

type LikesProps = {
  candidateData: {
    id: number;
    like?: string | null;
  };
};

export function Likes({ candidateData }: LikesProps) {
  const { dispatch } = useCandidateContext();

  function handleClick(
    likeType: string | null,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    e.preventDefault();
    if (!candidateData) return;

    const { id, like } = candidateData;

    if (!id) return;

    const newLikeState = like === likeType ? null : likeType;

    const likedCandidate = { ...candidateData, like: newLikeState };

    dispatch({
      type: "EDIT",
      payload: { ...likedCandidate, id },
    });
  }

  return (
    <div className="flex items-end gap-2 text-[1.38rem]">
      <div
        onClick={(e) => handleClick("like_2", e)}
        className={`leading-none transition-opacity hover:opacity-100 ${candidateData.like === "like_2" ? "text-basic-400" : "opacity-30"}`}
      >
        <BasicIcon icon="like" />
      </div>
      <div
        onClick={(e) => handleClick("like_1", e)}
        className={`leading-none transition-opacity hover:opacity-100 ${candidateData.like === "like_1" ? "text-basic-400" : "opacity-30"}`}
      >
        <BasicIcon icon="unlike" />
      </div>
    </div>
  );
}
