import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/PostView.module.css";

const PostsView = () => {
  const [menus, setMenus] = useState();
  useEffect(() => {
    axios.get("https://hyteria.vercel.app/api/crawl").then((res) => {
      console.log(res.data);
      setMenus(res.data);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {menus?.map((m, i) => (
        <div className={styles.page} key={i}>
          <div className={styles.name}>{m.name}</div>
          <div className={styles.menus}>
            
            {m.ulList.map((v, j) => {
              
              return (j % 2 === 1) ? (
                  <div className={styles.menu} key={j}>
                    
                    <div className={styles.list}>{v.menu}</div>
                    <div>
                      <img
                        className={styles.images}
                        src={v.img}
                        alt="사진이 준비중입니다."
                      />
                    </div>
                  </div>
              ) : (
                  <div className={styles.menu} key={j}>
                    <div>
                      <img
                        className={styles.images}
                        src={v.img}
                        alt="사진이 준비중입니다."
                      />
                    </div>
                    <div className={styles.list}>{v.menu}</div>
                  </div>
              );
            })
          }
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsView;
