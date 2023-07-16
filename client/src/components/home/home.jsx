import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import pkg from 'lodash'

import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

import { postService } from '../../services/post'
import { posts_atom } from '../../recoil/post'
import { Listing } from './Listing'
import Loader from '../Misc/Loader'

export const Home = () => {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: postService.getAll,
  })

  const setPosts = useSetRecoilState(posts_atom)

  const posts = useRecoilValue(posts_atom)

  const { orderBy } = pkg

  useEffect(() => {
    let mounted = true

    const preparePosts = async () => {
      if (postsQuery.data && mounted) {
        setPosts(postsQuery.data)
      }
    }
    preparePosts()

    return () => {
      mounted = false
    }
  }, [postsQuery.data, setPosts])

  //console.log('POSTS: ', posts)

  const sortedPosts = orderBy(posts, ['updatedAt'], ['desc'])

  if (postsQuery.isLoading || postsQuery.isFetching || postsQuery.isInitialLoading) {
    return <Loader />
  }

  return (
    <Stack>
      <Container>
        <h2>All Snippets</h2>
        {sortedPosts.map((post) => (
          <div key={post?.id}>
            <Listing post={post} />
            <hr />
          </div>
        ))}
      </Container>
    </Stack>
  )
}
