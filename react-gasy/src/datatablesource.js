export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "membre",
      headerName: "Membre",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "adresse",
      headerName: "Adresse",
      width: 100,
    },
    {
      field: "téléphone",
      headerName: "Téléphone",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];