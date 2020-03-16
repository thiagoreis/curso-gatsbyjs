import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => {
  return (
    <PostItem
      slug={hit.fields.slug}
      background={hit.background}
      timeToRead={hit.timeToRead.toString()}
      title={hit.title}
      date={hit.date}
      description={hit.description}
      category={hit.category}
    />
  )
}

export default Hit
