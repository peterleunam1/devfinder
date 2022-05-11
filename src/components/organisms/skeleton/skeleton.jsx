import "./skeleton.scss";
export default function Skeleton() {
  return (
    <article className="skeleton">
      <div className="skeleton__content">
        <div className="skeleton__content__one">
          <div className="skeleton__content__one__avatar skeletonAnimate"/>
          <div className="skeleton__content__one__name skeletonAnimate"/>
          <div className="skeleton__content__one__join skeletonAnimate"/>
        </div>
        <div className="skeleton__content__two">
          <div className="skeleton__content__two__bio skeletonAnimate"/>
          <div className="skeleton__content__two__follow skeletonAnimate"/>
        </div>
        <div className="skeleton__content__three skeletonAnimate"/>
        <div className="skeleton__content__three skeletonAnimate hide"/>
        <div className="skeleton__content__three skeletonAnimate hide"/>
      </div>
    </article>
  );
}
