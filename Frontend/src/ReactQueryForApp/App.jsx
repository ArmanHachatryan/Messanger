import {QueryClient, QueryClientProvider} from "react-query"
import MessageHistory from './pages/MessageHistory';

export default function App() {
    const queryClient= new QueryClient();

  return (
  <>
    <QueryClientProvider client={queryClient}>
        <MessageHistory/>
    </QueryClientProvider>    
    </>
  );
  
}
