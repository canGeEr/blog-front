<script>
export default {
  name: "TableHead",
  data() {
    return {
      titleBar: [
        { value: "name", width: "10%" },
        { value: "email", width: "20%" },
        { value: "fans", width: "5%" },
        { value: "legal", width: "5%" },
        { value: "grade", width: "5%" },
        { value: "operate", width: "55%" }
      ]
    };
  },
  render(h) {
    const titleBar = this.titleBar;
    const specialYTd = "operate";
    const last = titleBar.length - 1;
    return (
      <tr>
        {titleBar.map((item, index) => {
          let value = item.value;
          value = value.substring(0, 1).toUpperCase() + value.substring(1);
          return (
            <th class={index === last ? "last-column" : false}>{value}</th>
          );
        })}
      </tr>
    );
  }
};
</script>

<style scoped>
th {
  padding: 0.5% 1% 2% 1%;
  letter-spacing: 0.025vw;
}

</style>