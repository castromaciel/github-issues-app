import { FaArrowLeft } from 'react-icons/fa'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Loading } from '../../shared/components'
import { IssueComment } from '../components/IssueComment'
import { useIssue } from '../hooks'

const IssueView = () => {
  const params = useParams()
  const { id = '0' } = params

  const { issueQuery, commentsQuery } = useIssue(Number(id))

  if (issueQuery.isLoading) return <Loading />

  if (!issueQuery.data) return <Navigate to="./issues/list" />

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to="./issues/list" className="d-flex align-items-center gap-2">
          <FaArrowLeft />
          <span>
            Go Back
          </span>
        </Link>
      </div>

      <IssueComment issue={issueQuery.data} />

      {/* Comentario de otros */}
      { 
        commentsQuery.isLoading
          ? <Loading />
          : commentsQuery.data?.map((issue) => (
            <IssueComment key={issue.id} issue={issue} />
          ))  
      }
    </div>
  ) 
}

export default IssueView
