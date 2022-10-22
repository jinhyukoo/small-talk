import React from 'react';
import { createRoot } from 'react-dom/client';
import '../public/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import Page1 from '@/pages/Page1';
import Page2 from '@/pages/Page2';
import Invoice from './routes/invoice';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="page1" element={<Page1 />}>
        <Route path="sub" element={<Page2 />} />
        <Route path=":invoiceId" element={<Invoice />} />
      </Route>
      <Route path="page2" element={<Page2 />} />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There is nothing here!</p>
          </main>
        }
      />
    </Route>
  </Routes>
</BrowserRouter>);

// ReactDOM.render(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route path="page1" element={<Page1 />}>
//             <Route path="sub" element={<Page2 />} />
//             <Route path=":invoiceId" element={<Invoice />} />
//           </Route>
//           <Route path="page2" element={<Page2 />} />
//           <Route
//             path="*"
//             element={
//               <main style={{ padding: '1rem' }}>
//                 <p>There is nothing here!</p>
//               </main>
//             }
//           />
//         </Route>
//       </Routes>
//     </BrowserRouter>,
//   document.getElementById('root'),
// );
