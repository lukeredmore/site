import { useEffect } from "preact/hooks"
import { useLocation } from 'preact-iso';

const Redirect = (props: {to: string}) => {
  const location = useLocation();
  useEffect(() => {
    location.route(props.to);
  }, [])

  return null
}

export default Redirect