const TagListComponent = (props) => {
  const { tags } = props;
  return (
    <div className="tag-list">
      {tags.map((tag, index) => {
        return (
          <span key={index} className="tag-list-item">
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default TagListComponent;
