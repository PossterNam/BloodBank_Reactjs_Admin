import { Table } from "antd";
import Column from "antd/lib/table/Column";
import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetBloodGroup } from "../../Service/CallAPI";

function BloodGroupIndex(props) {
  const [groupBlood, setGroupBlood] = useState([]);

  useEffect(() => {
    fetchData();
  }, [groupBlood]);

  const fetchData = async () => {
    await GetBloodGroup().then((res) => setGroupBlood(res));
  };

  return (
    <div className="m-5">
      <div>
        <Link className="btn btn-primary" to="/BloodGroup/Add">
          Create
        </Link>
      </div>
      <Table dataSource={groupBlood}>
        <Column title="ID" dataIndex="groupbloodId" key="groupbloodId" />
        <Column
          title="Blood Group Name"
          dataIndex="bloodName"
          key="bloodName"
        />
        <Column
          title="Action"
          dataIndex=""
          key="groupbloodId"
          render={(text, record) => <span key={record.groupbloodId}><Link to={'/BloodGroup/edit/'+record.groupbloodId}>Edit</Link></span>}
        />
      </Table>
    </div>
  );
}

export default memo(BloodGroupIndex);
