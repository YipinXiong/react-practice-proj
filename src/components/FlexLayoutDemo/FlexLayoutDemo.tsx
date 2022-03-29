import React from 'react';

const FlexLayoutDemo = () => {
  return (
      <div className="d-flex flex-column h-100">
        <header style={{height: '30%', backgroundColor: 'aquamarine'}}>This is header</header>
        <main className="d-flex" style={{flex: 1}}>
          <aside style={{backgroundColor: 'yellow', width: '30%'}}>
            Aside
          </aside>
          <article style={{flex: 1, backgroundColor: 'brown'}}>
            article content
          </article>
        </main>
        <footer style={{height: '30%', backgroundColor: 'darkorange'}}>
          This is footer
        </footer>
      </div>
  );
};

export default FlexLayoutDemo;
